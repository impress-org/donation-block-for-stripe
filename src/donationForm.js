import {useMemo, useRef, useState} from '@wordpress/element';
import cx from 'classnames';
import {__} from '@wordpress/i18n';
import CurrencyInput from 'react-currency-input-field';
import axios from 'axios';
import StyleSheetFactory from "./frontendStyles";
import {css} from 'aphrodite';
import {Spinner} from '@wordpress/components';
import {ReactComponent as AlertIcon} from './images/alert.svg';
import {ReactComponent as LockIcon} from './images/lock.svg';
import {ReactComponent as MailIcon} from './images/mail.svg';
import {ReactComponent as UserIcon} from './images/user.svg';
import {ReactComponent as CaretIcon} from './images/caret-right.svg';
import {ReactComponent as DollarIcon} from './images/dollar.svg';
import {ReactComponent as ErrorIcon} from './images/stop.svg';

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
    const [errorMessage, setErrorMessage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);
    const stripe = useMemo(() => {
        return props.backend ? null : Stripe(props.attributes.stripePubKey);
    }, [props.attributes.stripePubKey, props.backend]);
    const elements = useRef(null);

    checkPaymentStatus();

    const updateDonationAmount = (amount) => {
        amount = amount.replace('$', '');
        setDonationAmount(amount);
    };

    const donationAmounts = [
        '5', '10', '25', '50', '100', '250'
    ];

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
            email: email
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
                paymentElement.mount('.paymentIntentForm');
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

        const {error} = await stripe.confirmPayment({
            elements: elements.current,
            confirmParams: {
                payment_method_data: {
                    billing_details: {
                        name: `${firstName} ${lastName}`,
                        email: email,
                    },
                },
                return_url: window.location.href + '#donation-form-receipt',
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setError(true);
            setErrorMessage(error.message);
        } else {
            setError(true);
            setErrorMessage("An unexpected error occurred.");
        }
        setIsLoading(false);
    }

    // 🏃‍ Fetches the payment intent status after payment submission.
    async function checkPaymentStatus() {
        const clientSecret = new URLSearchParams(window.location.search).get(
            'payment_intent_client_secret'
        );

        if (!clientSecret) {
            return;
        }

        const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

        console.log(paymentIntent);

        switch (paymentIntent.status) {
            case "succeeded":
                // showMessage("Payment succeeded!");
                break;
            case "processing":
                // showMessage("Your payment is processing.");
                break;
            case "requires_payment_method":
                // showMessage("Your payment was not successful, please try again.");
                break;
            default:
                // showMessage("Something went wrong.");
                break;
        }
    }

    return (
        <div className={'donation-form-block-wrap'}>
            {!props.attributes.stripeConnected &&
                <div className={`donation-form-notice ${css(styles.noticeBase)}`}>
                    <AlertIcon className={css(styles.noticeIcon)}/>
                    <p className={css(styles.formParagraph, styles.noticeParagraph)}>{__('Stripe needs to be connected in order to begin accepting donations.', 'donation-form-block')}</p>
                </div>
            }
            {!props.attributes.testMode && props.attributes.stripeConnected &&
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
                                        donationAmounts.map((amount, index) => {
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
                                <div className={`paymentIntentForm`}></div>
                                <button
                                    className={`donation-form-submit ${css(styles.buttonPrimary, styles.buttonBase, styles.donateBtn, styles.payBtn)}`}>
                                    Complete Donation
                                    <CaretIcon className={css(styles.donateBtnIcon)}/>
                                </button>
                            </form>
                        </div>
                    }
                    {3 === step &&
                        <div id={'donation-form-receipt'} className="donation-form-receipt-step">
                            <div
                                className={`donation-form-payment-summary ${css(styles.noticeBase, styles.noticeInfo, styles.noticeDonation)}`}>
                                <p className={css(styles.noticeDonationParagraph)}>{`Thank you for your $${donationAmount} donation!`}</p>
                            </div>
                            <p className={`donation-receipt-email-text ${css(styles.donationReceiptEmailText)}`}>
                                Your receipt has been sent to <strong>{email}</strong>
                            </p>
                            <div className={`donation-receipt-details`}>
                                <p className={`donation-receipt-heading ${css(styles.donationReceiptDetails)}`}>Donation
                                    Details</p>
                                <ul className={`donation-receipt-list ${css(styles.donationReceiptDetailsList)}`}>
                                    <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                        <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>Donor
                                            Name</p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>{firstName} {lastName}</span>
                                    </li>
                                    <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                        <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>Donor
                                            Email</p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>{email}</span>
                                    </li>
                                    <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                        <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>Donation
                                            Amount</p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>${donationAmount}</span>
                                    </li>
                                    <li className={`donation-receipt-list-item ${css(styles.donationReceiptDetailsListItem)}`}>
                                        <p className={`donation-receipt-list-item-p ${css(styles.formParagraph, styles.donationReceiptDetailsListItemParagraph)}`}>Donation
                                            Frequency</p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(styles.donationReceiptDetailsListItemSpan)}`}>One-time</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className={`donation-form-give-again ${css(styles.buttonPrimary, styles.buttonBase, styles.donateBtn, styles.giveAgainBtn)}`}
                                onClick={() => setStep(1)}>
                                Give Again
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
