import {useMemo, useRef, useState, useEffect} from '@wordpress/element';
import cx from 'classnames';
import {__} from '@wordpress/i18n';
import CurrencyInput from 'react-currency-input-field';
import axios from 'axios';
import StyleSheetFactory from './frontendStyles';
import {css} from 'aphrodite';
import {Spinner} from '@wordpress/components';
import lottie from 'lottie-web';
import {ReactComponent as AlertIcon} from './images/alert.svg';
import {ReactComponent as LockIcon} from './images/lock.svg';
import {ReactComponent as MailIcon} from './images/mail.svg';
import {ReactComponent as UserIcon} from './images/user.svg';
import {ReactComponent as CaretIcon} from './images/caret-right.svg';
import {ReactComponent as ErrorIcon} from './images/stop.svg';
import {ReactComponent as HeartIcon} from './images/heart.svg';
import useCheckStripeConnect from './hooks/useCheckStripeConnect';
import runLottieAnimation from './helperFunctions/runLottieAnimation';
import getDefaultStep from './helperFunctions/getDefaultStep';
import {zeroDecimalCodes} from './helperFunctions/zeroDecimalCurrencies';

/**
 * 💚 Donation Form.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const DonationForm = (props) => {
    const styles = StyleSheetFactory.getSheet(props);
    const [donationAmount, setDonationAmount] = useState(props.attributes.defaultAmount);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [handledIntent, setHandledIntent] = useState(null);
    const [errorFields, setErrorFields] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentIntent, setPaymentIntent] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState({
        status: '',
        message: '',
        error: false,
    });
    const [step, setStep] = useState(getDefaultStep(props.attributes.formId));
    const stripe = useMemo(() => {
        if (!props.attributes.stripeTestPubKey || !props.attributes.stripeLivePubKey) {
            return;
        }
        return props.backend
            ? null
            : Stripe(props.attributes.liveMode ? props.attributes.stripeLivePubKey : props.attributes.stripeTestPubKey);
    }, [props.attributes.stripeLivePubKey, props.attributes.stripeTestPubKey, props.backend]);
    const elements = useRef(null);
    const currencyFormatter = new Intl.NumberFormat(window.navigator.language);

    // Update the default amount when changed by admin.
    useEffect(() => {
        setDonationAmount(props.attributes.defaultAmount);
    }, [props.attributes.defaultAmount]);

    if (!props.backend) {
        useEffect(() => {
            stripe.registerAppInfo({
                name: 'GiveDonationBlock',
                partner_id: 'pp_partner_DKj75W1QYBxBLK',
                version: window.donationFormBlock.plugin_version,
                url: 'https://givewp.com',
            });
        }, [stripe]);
    }

    const resetForm = () => {
        setErrorMessage(null);
        setErrorFields([]);
        setStep(1);
        setIsLoading(false);
    };

    const handleAmountSubmit = (e) => {
        e.preventDefault();

        // 🛑 Don't proceed if in wp-admin.
        if (props.backend) {
            return;
        }

        setIsLoading(true);

        // 💵 How much should be charged? Converts to cents for non-zero decimal currencies.
        const chargeAmount = zeroDecimalCodes.includes(props.attributes.currencyCode) ? donationAmount : donationAmount * 100;

        // 🟢 Good to go.
        axios
            .post('/?dfb_donation-block-stripe-action=getStripeIntent', {
                amount: chargeAmount,
                firstName: firstName,
                lastName: lastName,
                email: email,
                paymentIntent,
                currency: props.attributes.currencyCode,
                liveMode: props.attributes.liveMode,
                nonce: window.donationFormBlock.nonce,
            })
            .then(function (response) {
                const data = response.data.data;
                // 🧐 Validation.
                if (data.error) {
                    setIsLoading(false);
                    if (data.message) {
                        setErrorMessage(data.message);
                    } else {
                        setErrorFields(data.fields);
                    }
                } else {
                    setStep(2);
                    // 🤗 Proceed with Stripe.
                    const clientSecret = data.clientSecret;
                    setPaymentIntent(data.paymentIntent);
                    const appearance = {
                        theme: 'stripe',
                        variables: {
                            colorPrimary: props.attributes.color,
                        },
                    };
                    elements.current = stripe.elements({appearance, clientSecret});
                    const paymentElement = elements.current.create('payment');
                    paymentElement.mount(`.donation-form-payment-intent-${props.attributes.formId}`);
                    paymentElement.on('ready', function (event) {
                        setIsLoading(false);
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
                setStep(1);
                setIsLoading(false);
            });
    };

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
                return_url:
                    window.location.origin +
                    window.location.pathname +
                    `?form_id=${props.attributes.formId}#donation-form-block-${props.attributes.formId}`,
            },
        });

        if (error.type === 'card_error' || error.type === 'validation_error') {
            setErrorMessage(error.message);
        } else {
            setErrorMessage('An unexpected error occurred.');
        }
        setIsLoading(false);
    };

    // 🏃‍ Fetches the payment intent status after payment submission.
    useEffect(() => {
        const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
        if (!clientSecret || handledIntent === clientSecret) {
            return;
        }

        const formId = new URLSearchParams(window.location.search).get('form_id');
        if (formId !== props.attributes.formId) {
            return;
        }

        setIsLoading(true);

        stripe.retrievePaymentIntent(clientSecret).then((response) => {
            const paymentIntent = response.paymentIntent;
            const newDonationAmount = (paymentIntent.amount / 100).toString();

            setDonationAmount(newDonationAmount);
            setHandledIntent(clientSecret);
            setIsLoading(false);
            setEmail(paymentIntent.receipt_email);
            runLottieAnimation('confetti-partyyy', 'lottie');

            // Set the payment status accordingly.
            switch (paymentIntent.status) {
                case 'succeeded':
                    setPaymentStatus({
                        status: 'Successful',
                        message: `Thank you for your ${props.attributes.currencySymbol + currencyFormatter.format(newDonationAmount)} donation!`,
                        error: false,
                    });
                    break;
                case 'processing':
                    setPaymentStatus({
                        status: 'Processing',
                        message: __('Your payment is processing.', 'donation-form-block'),
                        error: false,
                    });
                    break;
                case 'requires_payment_method':
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
        });
    }, [stripe]);

    const checkStripeConnected = useCheckStripeConnect();
    const stripeConnected = typeof props.stripeConnected !== 'undefined' ? props.stripeConnected : checkStripeConnected;

    // 🧹 Ensure donation amounts comes in as an array.
    let donationAmounts = props.attributes.donationAmounts;
    if (typeof donationAmounts === 'string') {
        donationAmounts = donationAmounts.split(', ');
    }

    // 🎉 Render the donation form.
    return (
        <div className={'donation-form-block-wrap'}>
            {stripeConnected === false && (
                <div className={`donation-form-notice ${css(styles.noticeBase)}`}>
                    <AlertIcon className={css(styles.noticeIcon)} />
                    <p className={css(styles.formParagraph, styles.noticeParagraph)}>
                        {__(
                            'Stripe needs to be connected in order to begin accepting donations.',
                            'donation-form-block'
                        )}
                    </p>
                </div>
            )}
            {!props.attributes.liveMode && stripeConnected && (
                <div className={`donation-form-notice ${css(styles.noticeBase)}`}>
                    <AlertIcon className={css(styles.noticeIcon)} />
                    <p className={css(styles.formParagraph, styles.noticeParagraph)}>
                        {__(
                            'Test mode is enabled. No live payments will be accepted for this donation form.',
                            'donation-form-block'
                        )}
                    </p>
                </div>
            )}
            <div className={`donation-form-block ${css(styles.formContainer)}`}>
                {isLoading && (
                    <div className={`donation-form-loading-wrap ${css(styles.loadingWrap)}`}>
                        <Spinner />
                    </div>
                )}
                {props.attributes.backgroundUrl && (
                    <div
                        className={`donation-form-header ${css(styles.formHeaderImage)}`}
                        style={{
                            backgroundImage: `url(${props.attributes.backgroundUrl})`,
                        }}
                    ></div>
                )}
                <div className={`donation-form-inner ${css(styles.formContainerInner)}`}>
                    {1 === step && (
                        <>
                            <div className={`donation-form-fieldset-intro ${css(styles.introWrap)}`}>
                                {props.attributes.introHeading && (
                                    <h2 className={`donation-form-main-heading ${css(styles.formHeading)}`}>
                                        {props.attributes.introHeading}
                                    </h2>
                                )}
                                {props.attributes.introSubheading && (
                                    <p className={`donation-form-main-subheading ${css(styles.formParagraph)}`}>
                                        {props.attributes.introSubheading}
                                    </p>
                                )}
                            </div>
                            <form onSubmit={handleAmountSubmit}>
                                <div
                                    className={`donation-form-field-row ${css(
                                        styles.formFieldRow,
                                        styles.currencyFieldWrap
                                    )}`}
                                >
                                    <p className={css(styles.currencyIcon)}>
                                        {props.attributes.currencySymbol}
                                    </p>
                                    <CurrencyInput
                                        className={css(styles.currencyField)}
                                        name="amount"
                                        allowDecimals={true}
                                        allowNegativeValue={false}
                                        maxLength={9}
                                        value={donationAmount}
                                        defaultValue={donationAmount}
                                        intlConfig={{ locale: window.navigator.language }}
                                        onValueChange={(value) => setDonationAmount(value)}
                                    />
                                </div>
                                <div
                                    className={`donation-form-field-row donation-form-amount-btns ${css(
                                        styles.formFieldRow,
                                        styles.formButtonRow
                                    )}`}
                                >
                                    {donationAmounts.map((amount, index) => {
                                        return (
                                            <button
                                                key={index}
                                                className={`${cx('donation-form-amount-btn', {
                                                    'is-selected': donationAmount === amount,
                                                })} ${css(
                                                    donationAmount === amount
                                                        ? [styles.buttonBase, styles.buttonSelected]
                                                        : [styles.buttonBase, styles.buttonPrimary]
                                                )}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setDonationAmount(amount);
                                                }}
                                            >
                                                <span className={css(styles.btnDollarSymbol)}>{props.attributes.currencySymbol}</span>
                                                {currencyFormatter.format(amount)}
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className={`donation-form-field-row ${css(styles.introWrap)}`}>
                                    {props.attributes.fieldsHeading && (
                                        <h3 className={`donation-form-fields-heading ${css(styles.formHeading)}`}>
                                            {props.attributes.fieldsHeading}
                                        </h3>
                                    )}
                                    {props.attributes.fieldsSubheading && (
                                        <p className={`donation-form-fields-subheading ${css(styles.formParagraph)}`}>
                                            {props.attributes.fieldsSubheading}
                                        </p>
                                    )}
                                </div>
                                <div
                                    className={`donation-form-field-row donation-form-fields-wrap ${css(
                                        styles.donationFormFieldsRow
                                    )}`}
                                >
                                    <div className={`donation-form-field-wrap ${css(styles.fieldIconWrap)}`}>
                                        <UserIcon className={`${css(styles.fieldIcon)}`} />
                                        <input
                                            className={`donation-form-field donation-form-first-name ${css(
                                                styles.textField,
                                                styles.textFieldIcon
                                            )}`}
                                            type={'text'}
                                            placeholder={__('First Name', 'donation-form-block')}
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required={true}
                                        />
                                    </div>
                                    <input
                                        className={`donation-form-field donation-form-last-name ${css(
                                            styles.textField
                                        )}`}
                                        type={'text'}
                                        placeholder={__('Last Name', 'donation-form-block')}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required={false}
                                    />
                                    <div className={`donation-form-field-wrap ${css(styles.fieldIconWrap)}`}>
                                        <MailIcon className={`${css(styles.fieldIcon, styles.emailIcon)}`} />
                                        <input
                                            className={`donation-form-field donation-form-first-email ${css(
                                                styles.textField,
                                                styles.textFieldIcon
                                            )}`}
                                            type={'email'}
                                            placeholder={__('Email', 'donation-form-block')}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required={true}
                                        />
                                    </div>
                                    <button
                                        className={`donation-form-submit ${css(
                                            styles.buttonPrimary,
                                            styles.buttonBase,
                                            styles.donateBtn
                                        )}`}
                                    >
                                        {props.attributes.donateBtnText}
                                        <CaretIcon className={css(styles.donateBtnIcon)} />
                                    </button>
                                </div>
                                {
                                    // 🙅‍ Validation error message (if any).
                                    errorFields.length > 0 &&
                                        errorFields.map((error, index) => (
                                            <ErrorMessage key={index} styles={styles}>
                                                {error.message}
                                            </ErrorMessage>
                                        ))
                                }
                                {errorMessage && <ErrorMessage styles={styles}>{errorMessage}</ErrorMessage>}
                            </form>
                        </>
                    )}
                    {2 === step && (
                        <div className={`donation-form-payment-step`}>
                            <div
                                className={`donation-form-payment-summary ${css(
                                    styles.noticeBase,
                                    styles.noticeDonation,
                                    styles.editDonationNotice
                                )}`}
                            >
                                <div className={css(styles.heartIconWrap)}>
                                    <HeartIcon className={css(styles.heartIcon)} />
                                </div>
                                <div>
                                    <p className={css(styles.donationSummaryText)}>
                                        <span className={css(styles.donationSummaryAmountWrap)}>
                                            <span className={css(styles.donationSummaryCurrencyIcon)}>{props.attributes.currencySymbol}</span>
                                            <span
                                                className={css(styles.donationSummaryAmountText)}
                                            >{`${currencyFormatter.format(donationAmount)}`}</span>
                                        </span>
                                        <span className={css(styles.donationTypeText)}>
                                            {__('One-time donation', 'donation-form-block')}
                                        </span>
                                    </p>
                                    <p className={css(styles.donationPaymentInstructions)}>
                                        {__('Please complete your payment below 👇', 'donation-form-block')}
                                    </p>
                                </div>

                                <button
                                    className={`donation-form-edit ${css(styles.editDonationBtn)}`}
                                    onClick={() => setStep(1)}
                                >
                                    {__('Edit Donation', 'donation-form-block')}
                                </button>
                            </div>
                            <form onSubmit={handlePaymentSubmit}>
                                <div className={`donation-form-payment-intent-${props.attributes.formId} ${css(styles.stripePaymentWrap)}`}></div>
                                {errorMessage && <ErrorMessage styles={styles}>{errorMessage}</ErrorMessage>}
                                <button
                                    className={`donation-form-submit ${css(
                                        styles.buttonPrimary,
                                        styles.buttonBase,
                                        styles.donateBtn,
                                        styles.payBtn
                                    )}`}
                                >
                                    {__('Complete Donation', 'donation-form-block')}
                                    <CaretIcon className={css(styles.donateBtnIcon)} />
                                </button>
                            </form>
                        </div>
                    )}
                    {3 === step && (
                        <div
                            id={'donation-form-receipt'}
                            className={`donation-form-receipt-step ${css(styles.donationReceipt)}`}
                        >
                            {'' !== paymentStatus.status && true !== paymentStatus.error && (
                                <>
                                    <div
                                        id={'lottie'}
                                        className={`donation-form-lottie-wrap ${css(styles.lottieWrap)}`}
                                    ></div>
                                    <div
                                        className={`donation-form-payment-summary ${css(
                                            styles.noticeBase,
                                            styles.noticeInfo,
                                            styles.noticeDonation
                                        )}`}
                                    >
                                        <p className={css(styles.noticeDonationParagraph)}>{paymentStatus.message}</p>
                                    </div>
                                    <p
                                        className={`donation-receipt-email-text ${css(
                                            styles.donationReceiptEmailText
                                        )}`}
                                    >
                                        {__('Your receipt has been sent to', 'donation-form-block')}{' '}
                                        <strong>{email}</strong>
                                    </p>
                                </>
                            )}
                            {'' !== paymentStatus.status && true === paymentStatus.error && (
                                <ErrorMessage styles={styles}>{paymentStatus.message}</ErrorMessage>
                            )}
                            <div className={`donation-receipt-details`}>
                                <p className={`donation-receipt-heading ${css(styles.donationReceiptDetails)}`}>
                                    {__('Donation Details', 'donation-form-block')}
                                </p>
                                <ul className={`donation-receipt-list ${css(styles.donationReceiptDetailsList)}`}>
                                    {'' !== paymentStatus.status && (
                                        <li
                                            className={`donation-receipt-list-item ${css(
                                                styles.donationReceiptDetailsListItem
                                            )}`}
                                        >
                                            <p
                                                className={`donation-receipt-list-item-p ${css(
                                                    styles.formParagraph,
                                                    styles.donationReceiptDetailsListItemParagraph
                                                )}`}
                                            >
                                                {__('Payment Status', 'donation-form-block')}
                                            </p>
                                            <span
                                                className={`donation-receipt-list-item-span ${css(
                                                    styles.donationReceiptDetailsListItemSpan
                                                )}`}
                                            >
                                                {paymentStatus.status}
                                            </span>
                                        </li>
                                    )}
                                    <li
                                        className={`donation-receipt-list-item ${css(
                                            styles.donationReceiptDetailsListItem
                                        )}`}
                                    >
                                        <p
                                            className={`donation-receipt-list-item-p ${css(
                                                styles.formParagraph,
                                                styles.donationReceiptDetailsListItemParagraph
                                            )}`}
                                        >
                                            {__('Donor Email', 'donation-form-block')}
                                        </p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(
                                                styles.donationReceiptDetailsListItemSpan
                                            )}`}
                                        >
                                            {email}
                                        </span>
                                    </li>
                                    <li
                                        className={`donation-receipt-list-item ${css(
                                            styles.donationReceiptDetailsListItem
                                        )}`}
                                    >
                                        <p
                                            className={`donation-receipt-list-item-p ${css(
                                                styles.formParagraph,
                                                styles.donationReceiptDetailsListItemParagraph
                                            )}`}
                                        >
                                            {__('Donation Amount', 'donation-form-block')}
                                        </p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(
                                                styles.donationReceiptDetailsListItemSpan
                                            )}`}
                                        >
                                            {props.attributes.currencySymbol + currencyFormatter.format(donationAmount)}
                                        </span>
                                    </li>
                                    <li
                                        className={`donation-receipt-list-item ${css(
                                            styles.donationReceiptDetailsListItem
                                        )}`}
                                    >
                                        <p
                                            className={`donation-receipt-list-item-p ${css(
                                                styles.formParagraph,
                                                styles.donationReceiptDetailsListItemParagraph
                                            )}`}
                                        >
                                            {__('Donation Frequency', 'donation-form-block')}
                                        </p>
                                        <span
                                            className={`donation-receipt-list-item-span ${css(
                                                styles.donationReceiptDetailsListItemSpan
                                            )}`}
                                        >
                                            {__('One-time', 'donation-form-block')}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className={`donation-form-give-again ${css(
                                    styles.buttonPrimary,
                                    styles.buttonBase,
                                    styles.donateBtn,
                                    styles.giveAgainBtn
                                )}`}
                                onClick={resetForm}
                            >
                                {__('Give Again', 'donation-form-block')}
                                <CaretIcon className={css(styles.donateBtnIcon)} />
                            </button>
                        </div>
                    )}
                    {3 !== step &&
                        // 🔒 SSL secure if actually https.
                        window.location.protocol === 'https:' && (
                            <div className={`donation-form-secure-wrap ${css(styles.secureFooter)}`}>
                                <LockIcon className={`donation-form-lock-icon ${css(styles.iconLock)}`} />
                                {__('100% Secure Donation', 'donation-form-block')}
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
};

DonationForm.defaultProps = {
    attributes: [],
};

function ErrorMessage({children, styles}) {
    return (
        <div className={`donation-form-notice ${css(styles.noticeBase, styles.noticeValidationError)}`}>
            <ErrorIcon className={css(styles.noticeIcon)} />
            <p className={css(styles.formParagraph, styles.noticeParagraph)}>{children}</p>
        </div>
    );
}

export default DonationForm;
