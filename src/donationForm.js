import {useEffect, useMemo, useRef, useState} from '@wordpress/element';
import cx from 'classnames';
import {__} from '@wordpress/i18n';
import CurrencyInput from 'react-currency-input-field';
import axios from 'axios';
import StyleSheetFactory from "./frontendStyles";
import {css} from 'aphrodite';
import {Spinner} from '@wordpress/components';
import lottie from 'lottie-web';
import {ReactComponent as AlertIcon} from './images/alert.svg';
import {ReactComponent as LockIcon} from './images/lock.svg';
import {ReactComponent as MailIcon} from './images/mail.svg';
import {ReactComponent as UserIcon} from './images/user.svg';
import {ReactComponent as CaretIcon} from './images/caret-right.svg';
import {ReactComponent as DollarIcon} from './images/dollar.svg';
import {ReactComponent as ErrorIcon} from './images/stop.svg';
import useCheckStripeConnect from "./useCheckStripeConnect";
import runLottieAnimation from "./runLottieAnimation";

/**
 * 💚 Donation Form.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const DonationForm = props => {

    const styles = StyleSheetFactory.getSheet(props);
    const [donationAmount, setDonationAmount] = useState('25');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const [handledIntent, setHandledIntent] = useState(null);
    const [errorMessage, setErrorMessage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState({
        status: '',
        message: '',
        error: false
    });
    const [step, setStep] = useState(1);
    const stripe = useMemo(() => {
        if (!props.attributes.stripeTestPubKey || !props.attributes.stripeLivePubKey) {
            return;
        }
        return props.backend ? null : Stripe(props.attributes.liveMode ? props.attributes.stripeLivePubKey : props.attributes.stripeTestPubKey);
    }, [props.attributes.stripeLivePubKey, props.attributes.stripeTestPubKey, props.backend]);
    const elements = useRef(null);

    // Checks url for payment success query params.
    checkPaymentStatus();

    const updateDonationAmount = (amount) => {
        amount = amount.replace('$', '');
        setDonationAmount(amount);
    };

    // 🤠 Handle the first step of the form.
    const handleAmountSubmit = (e) => {
        e.preventDefault();

        // 🛑 Don't proceed if in wp-admin.
        if (props.backend) {
            return;
        }

        setIsLoading(true);

        // 🟢 Good to go.
        axios.post('/?dfb_donation-block-stripe-action=getStripeIntent', {
            amount: donationAmount * 100,
            firstName: firstName,
            lastName: lastName,
            email: email,
            liveMode: props.attributes.liveMode,
        }).then(function (response) {
            // 🧐 Validation.
            if (response.data.data.error) {
                setError(true);
                setIsLoading(false);
                setErrorMessage(response.data.data.fields);
            } else {
                setStep(2);
                // 🤗 Proceed with Stripe.
                const clientSecret = response.data.data.clientSecret;
                const appearance = {
                    theme: 'stripe',
                    variables: {
                        colorPrimary: props.attributes.color,
                    },
                };
                elements.current = stripe.elements({appearance, clientSecret});
                const paymentElement = elements.current.create('payment');
                paymentElement.mount('.donation-form-payment-intent');
                paymentElement.on('ready', function (event) {
                    setIsLoading(false);
                });
            }
        }).catch(function (error) {
            console.log(error);
            setStep(1);
            setIsLoading(false);
        });
    }

    // 💰 Payment.
    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const {paymentIntent, error} = await stripe.confirmPayment({
            elements: elements.current,
            redirect: 'always',
            confirmParams: {
                payment_method_data: {
                    billing_details: {
                        name: `${firstName} ${lastName}`,
                        email: email,
                    },
                },
                return_url: window.location.origin + window.location.pathname + `?form_id=${props.attributes.formId}#donation-form-block-${props.attributes.formId}`,
            },
        });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            setError(true);
            setErrorMessage(error.message);
        } else {
            setError(true);
            setErrorMessage('An unexpected error occurred.');
        }
        setIsLoading(false);
    }

    // 🏃‍ Fetches the payment intent status after payment submission.
    async function checkPaymentStatus() {

        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        );

        if (!clientSecret || handledIntent === clientSecret) {
            return;
        }

        const formId = new URLSearchParams(window.location.search).get(
            'form_id'
        );

        if (formId !== props.attributes.formId) {
            return;
        }

        const {paymentIntent} = await stripe.retrievePaymentIntent(clientSecret);

        setStep(3);
        setDonationAmount(paymentIntent.amount / 100);
        setEmail(paymentIntent.receipt_email);
        setHandledIntent(clientSecret);

        switch (paymentIntent.status) {
            case "succeeded":
                setPaymentStatus({
                    status: 'Successful',
                    message: `Thank you for your $${donationAmount} donation!`,
                    error: false,
                });
                break;
            case "processing":
                setPaymentStatus({
                    status: 'Processing',
                    message: __('Your payment is processing.', 'donation-form-block'),
                    error: false,
                });
                break;
            case "requires_payment_method":
                setPaymentStatus({
                    status: 'Not successful',
                    message: __('Your payment was not successful, please try again.', 'donation-form-block'),
                    error: true,
                });
                break;
            default:
                setPaymentStatus({
                    status: paymentIntent.status,
                    message: __('Something went wrong, please try again.', 'donation-form-block'),
                    error: true,
                });
                break;
        }
    }

    // 🎊 Confetti animation on successful payment completion.
    if (step === 3) {
        runLottieAnimation('confetti-partyyy', document.getElementById('lottie'));
    }

    const checkStripeConnected = useCheckStripeConnect();
    const stripeConnected = typeof props.stripeConnected !== 'undefined' ? props.stripeConnected : checkStripeConnected;

    // 🎉 Render the donation form.
    return (
        <div className={'donation-form-block-wrap'}>
            {stripeConnected === false &&
                <div className={`donation-form-notice ${css(styles.noticeBase)}`}>
                    <AlertIcon className={css(styles.noticeIcon)}/>
                    <p className={css(styles.formParagraph, styles.noticeParagraph)}>{__('Stripe needs to be connected in order to begin accepting donations.', 'donation-form-block')}</p>
                </div>
            }
            {!props.attributes.liveMode && stripeConnected &&
                <div className={`donation-form-notice ${css(styles.noticeBase)}`}>
                    <AlertIcon className={css(styles.noticeIcon)}/>
                    <p className={css(styles.formParagraph, styles.noticeParagraph)}>{__('Test mode is enabled. No live payments will be accepted for this donation form.', 'donation-form-block')}</p>
                </div>
            }
            <div className={`donation-form-block ${css(styles.formContainer)}`}>
                {isLoading &&
                    <div className={`donation-form-loading-wrap ${css(styles.loadingWrap)}`}>
                        <Spinner/>
                    </div>
                }
                {props.attributes.backgroundUrl &&
                    <div
                        className={`donation-form-header ${css(styles.formHeaderImage)}`}
                        style={{
                            backgroundImage: `url(${props.attributes.backgroundUrl})`
                        }}></div>
                }
                <div className={`donation-form-inner ${css(styles.formContainerInner)}`}>
                    {1 === step &&
                        <>
                            <div className={`donation-form-fieldset-intro ${css(styles.introWrap)}`}>
                                {props.attributes.introHeading &&
                                    <h2 className={`donation-form-main-heading ${css(styles.formHeading)}`}>{props.attributes.introHeading}</h2>
                                }
                                {props.attributes.introSubheading &&
                                    <p className={`donation-form-main-subheading ${css(styles.formParagraph)}`}>{props.attributes.introSubheading}</p>
                                }
                            </div>
                            <form onSubmit={handleAmountSubmit}>
                                <div
                                    className={`donation-form-field-row ${css(styles.formFieldRow, styles.currencyFieldWrap)}`}>
                                    <DollarIcon className={css(styles.currencyIcon)}/>
                                    <CurrencyInput
                                        className={css(styles.currencyField)}
                                        name="amount"
                                        allowDecimals={true}
                                        allowNegativeValue={false}
                                        maxLength={6}
                                        value={donationAmount}
                                        defaultValue={donationAmount}
                                        onValueChange={(value, name) => updateDonationAmount(value)}
                                    />
                                </div>
                                <div
                                    className={`donation-form-field-row donation-form-amount-btns ${css(styles.formFieldRow, styles.formButtonRow)}`}>
                                    {
                                        props.attributes.donationAmounts.map((amount, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    className={`${cx('donation-form-amount-btn', {'is-selected': donationAmount === amount})} ${css(
                                                        donationAmount === amount ? [styles.buttonBase, styles.buttonSelected] : [styles.buttonBase, styles.buttonPrimary],)}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        updateDonationAmount(amount)
                                                    }}
                                                >
                                                    <span className={css(styles.btnDollarSymbol)}>$</span>{amount}
                                                </button>
                                            );
                                        })
                                    }
                                </div>
                                <div className={`donation-form-field-row ${css(styles.introWrap)}`}>
                                    {props.attributes.fieldsHeading &&
                                        <h3 className={`donation-form-fields-heading ${css(styles.formHeading)}`}>{props.attributes.fieldsHeading}</h3>
                                    }
                                    {props.attributes.fieldsSubheading &&
                                        <p className={`donation-form-fields-subheading ${css(styles.formParagraph)}`}>{props.attributes.fieldsSubheading}</p>
                                    }
                                </div>
                                <div
                                    className={`donation-form-field-row donation-form-fields-wrap ${css(styles.donationFormFieldsRow)}`}>
                                    <div className={`donation-form-field-wrap ${css(styles.fieldIconWrap)}`}>
                                        <UserIcon className={`${css(styles.fieldIcon)}`}/>
                                        <input
                                            className={`donation-form-field donation-form-first-name ${css(styles.textField, styles.textFieldIcon)}`}
                                            type={'text'}
                                            placeholder={__('First Name', 'donation-form-block')}
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required={true}
                                        />
                                    </div>
                                    <input
                                        className={`donation-form-field donation-form-last-name ${css(styles.textField)}`}
                                        type={'text'}
                                        placeholder={__('Last Name', 'donation-form-block')}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required={false}
                                    />
                                    <div className={`donation-form-field-wrap ${css(styles.fieldIconWrap)}`}>
                                        <MailIcon className={`${css(styles.fieldIcon, styles.emailIcon)}`}/>
                                        <input
                                            className={`donation-form-field donation-form-first-email ${css(styles.textField, styles.textFieldIcon)}`}
                                            type={'email'}
                                            placeholder={__('Email', 'donation-form-block')}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required={true}
                                        />
                                    </div>
                                    <button
                                        className={`donation-form-submit ${css(styles.buttonPrimary, styles.buttonBase, styles.donateBtn)}`}
                                    >
                                        {props.attributes.donateBtnText}
                                        <CaretIcon className={css(styles.donateBtnIcon)}/>
                                    </button>
                                </div>
                                {
                                    // 🙅‍ Validation error message (if any).
                                    error &&
                                    errorMessage.map((error, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`donation-form-notice ${css(styles.noticeBase, styles.noticeValidationError)}`}>
                                                <ErrorIcon className={css(styles.noticeIcon)}/>
                                                <p className={css(styles.formParagraph, styles.noticeParagraph)}>{error.message}</p>
                                            </div>
                                        );
                                    })
                                }
                            </form>
                        </>
                    }
                    {2 === step &&
                        <div className={`donation-form-payment-step`}>
                            <div
                                className={`donation-form-payment-summary ${css(styles.noticeBase, styles.noticeInfo, styles.noticeDonation)}`}>
                                <p className={css(styles.noticeDonationParagraph)}>{`Complete your $${donationAmount} one-time donation`}</p>
                            </div>
                            <form onSubmit={handlePaymentSubmit}>
                                <div className={`donation-form-payment-intent ${css(styles.stripePaymentWrap)}`}></div>
                                {error &&
                                    <div
                                        className={`donation-form-notice ${css(styles.noticeBase, styles.noticeValidationError)}`}>
                                        <ErrorIcon className={css(styles.noticeIcon)}/>
                                        <p className={css(styles.formParagraph, styles.noticeParagraph)}>{errorMessage}</p>
                                    </div>
                                }
                                <button
                                    className={`donation-form-submit ${css(styles.buttonPrimary, styles.buttonBase, styles.donateBtn, styles.payBtn)}`}>
                                    {__('Complete Donation', 'donation-form-block')}
                                    <CaretIcon className={css(styles.donateBtnIcon)}/>
                                </button>
                            </form>
                        </div>
                    }
                    {3 === step &&
                        <div id={'donation-form-receipt'} className="donation-form-receipt-step">
                            {'' !== paymentStatus.status && true !== paymentStatus.error &&
                                <>
                                    <div id={'lottie'}
                                         className={`donation-form-lottie-wrap ${css(styles.lottieWrap)}`}></div>
                                    <div
                                        className={`donation-form-payment-summary ${css(styles.noticeBase, styles.noticeInfo, styles.noticeDonation)}`}>
                                        <p className={css(styles.noticeDonationParagraph)}>{paymentStatus.message}</p>
                                    </div>
                                    <p className={`donation-receipt-email-text ${css(styles.donationReceiptEmailText)}`}>
                                        Your receipt has been sent to <strong>{email}</strong>
                                    </p>
                                </>
                            }
                            {'' !== paymentStatus.status && true === paymentStatus.error &&
                                // Error message.
                                <div className={`donation-form-notice ${css(styles.noticeBase)}`}>
                                    <AlertIcon className={css(styles.noticeIcon)}/>
                                    <p className={css(styles.formParagraph, styles.noticeParagraph)}>{paymentStatus.message}</p>
                                </div>

                            }
                            <div className={`donation-receipt-details`}>
                                <p className={`donation-receipt-heading ${css(styles.donationReceiptDetails)}`}>{__('Donation Details', 'donation-form-block')}</p>
                                <ul className={`donation-receipt-list ${css(styles.donationReceiptDetailsList)}`}>
                                    {'' !== paymentStatus.status &&
                                        <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                            <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>{__('Payment Status', 'donation-form-block')}</p>
                                            <span
                                                className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>{paymentStatus.status}</span>
                                        </li>
                                    }
                                    <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                        <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>{__('Donor Email', 'donation-form-block')}</p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>{email}</span>
                                    </li>
                                    <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                        <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>{__('Donation Amount', 'donation-form-block')}</p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>${donationAmount}</span>
                                    </li>
                                    <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                        <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>{__('Donation Frequency', 'donation-form-block')}</p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>{__('One-time', 'donation-form-block')}</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className={`donation-form-give-again ${css(styles.buttonPrimary, styles.buttonBase, styles.donateBtn, styles.giveAgainBtn)}`}
                                onClick={() => setStep(1)}>
                                {__('Give Again', 'donation-form-block')}
                                <CaretIcon className={css(styles.donateBtnIcon)}/>
                            </button>
                        </div>
                    }
                    {3 !== step &&
                        // 🔒 SSL secure if actually https.
                        window.location.protocol === 'https:' &&
                        <div className={`donation-form-secure-wrap ${css(styles.secureFooter)}`}>
                            <LockIcon className={`donation-form-lock-icon ${css(styles.iconLock)}`}/>
                            {__('100% Secure Donation', 'donation-form-block')}
                        </div>
                    }
                </div>
            </div>
        </div>
    );

}

DonationForm.defaultProps = {
    attributes: [],
};

export default DonationForm;
