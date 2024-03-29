import {__} from '@wordpress/i18n';
import DonationForm from './donationForm';
import {
    Button,
    ColorPalette,
    Dashicon,
    ExternalLink,
    PanelBody,
    PanelRow,
    ResponsiveWrapper,
    SelectControl,
    TextControl,
    ToggleControl,
} from '@wordpress/components';
import {Fragment, useEffect, useState} from '@wordpress/element';
import {InspectorControls, MediaUpload, MediaUploadCheck, useBlockProps} from '@wordpress/block-editor';
import {dispatch, useSelect} from '@wordpress/data';
import {usePageVisibility} from 'react-page-visibility';
import {ReactComponent as StripeIcon} from './images/stripe-s.svg';
import {ReactComponent as GiveLogo} from './images/givewp-logo.svg';
import {ReactComponent as QuestionIcon} from './images/question.svg';
import './editor.scss';
import useCheckStripeConnect from './hooks/useCheckStripeConnect';
import runLottieAnimation from './helperFunctions/runLottieAnimation';
import StripeDisconnectModal from './components/StripeDisconnectModal';
import AmountLevels from './components/AmountLevels';
import {listCountries} from './helperFunctions/countryCurrencies';

// 🎨 Color picker colors.
const colors = [
    {name: 'Gray', color: '#2F363D'},
    {name: 'Light Gray', color: '#6A737D'},
    {name: 'Blue', color: '#044289'},
    {name: 'Light Blue', color: '#0366D6'},
    {name: 'Green', color: '#176F2C'},
    {name: 'Light Green', color: '#28A745'},
    {name: 'Yellow', color: '#DBAB09'},
    {name: 'Light Yellow', color: '#FFD33D'},
    {name: 'Orange', color: '#D15704'},
    {name: 'Light Orange', color: '#F66A0A'},
    {name: 'Red', color: '#B31D28'},
    {name: 'Light Red', color: '#D73A49'},
    {name: 'Pink', color: '#B93A86'},
    {name: 'Light Pink', color: '#EA4AAA'},
];

/**
 * Edit function.
 *
 *  @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes, instanceId}) {
    const blockProps = useBlockProps();
    const {
        donationAmounts,
        defaultAmount,
        countryCode,
        enableLink,
        enableRecaptchaBackend,
        recaptchaSitekey,
        currencyCode,
        currencySymbol,
        backgroundId,
        color,
        liveMode,
        preview,
    } = attributes;

    // 🖼 Preview image when an admin hovers over the block.
    if (preview) {
        return (
            <Fragment>
                <img
                    src={dfbAdminLocalVars.profile_preview}
                    alt={__('Donation form block for Stripe by GiveWP.', 'donation-form-block')}
                    style={{width: '100%', height: 'auto'}}
                />
            </Fragment>
        );
    }

    const [recaptchaState, setRecaptchaState] = useState({
        enableRecaptchaBackend: false,
        recaptchaSitekey: '',
    });

    const siteSettings = useSelect((select) => {
        return select('core').getEntityRecord('root', 'site');
    }, []);

    useEffect(() => {
        if (siteSettings) {
            const {dfb_options} = siteSettings;
            setRecaptchaState({
                recaptchaSitekey: dfb_options.recaptcha_v2_site_key,
                recaptchaSecretKey: dfb_options.recaptcha_v2_secret_key,
                enableRecaptchaBackend: dfb_options.recaptcha_v2_enable,
            });
            setAttributes({
                recaptchaSitekey: dfb_options.recaptcha_v2_site_key,
                enableRecaptchaBackend: dfb_options.recaptcha_v2_enable,
            });
        }
    }, [siteSettings]);

    const submitRecaptchaCreds = () => {
        // Admin entered a good token 👍.
        // Save it and show a notice.
        dispatch('core')
            .saveEntityRecord('root', 'site', {
                dfb_options: {
                    recaptcha_v2_secret_key: recaptchaState.recaptchaSecretKey,
                    recaptcha_v2_site_key: recaptchaState.recaptchaSitekey,
                    recaptcha_v2_enable: true,
                },
            })
            .then((response) => {
                dispatch('core/notices').createInfoNotice(
                    __('🎉 Success! The API Keys have been saved.', 'donation-form-block'),
                    {
                        isDismissible: true,
                        type: 'snackbar',
                    }
                );
                setAttributes({
                    recaptchaSitekey: recaptchaState.recaptchaSitekey,
                    enableRecaptchaBackend: true,
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch('core/notices').createNotice(error.message, {
                    isDismissible: true,
                    type: 'snackbar',
                });
                setAttributes({recaptchaSitekey: null, recaptchaSecretKey: null});
            });
    };

    const removeBackground = () => {
        setAttributes({
            backgroundId: 0,
            backgroundUrl: '',
        });
    };

    const onSelectBackground = (background) => {
        setAttributes({
            backgroundId: background.id,
            backgroundUrl: background.url,
        });
    };

    const background = useSelect(
        (select) => {
            return select('core').getMedia(backgroundId);
        },
        [onSelectBackground]
    );

    const userIsAdmin = useSelect((select) => {
        return select('core').canUser('create', 'users');
    }, []);

    // 🔌 Give the form a unique ID for receipts and more.
    useEffect(() => {
        setAttributes({
            formId: instanceId,
        });
    }, [instanceId]);

    // Handle initial Stripe connection return.
    const isVisible = usePageVisibility();
    const [stripeConnectionFlow, setStripeConnectionFlow] = useState(false);
    const [disconnectModalOpen, setDisconnectModalOpen] = useState(false);
    const {stripeConnected, setStripeConnected} = useCheckStripeConnect(isVisible && stripeConnectionFlow);

    useEffect(() => {
        if (stripeConnected && stripeConnectionFlow) {
            runLottieAnimation('fireworks', 'dfb-connected-lottie');
        }
    }, [stripeConnected, stripeConnectionFlow]);

    const currencyOptions = [...listCountries()].map((country) => {
        return {
            label: `${country.name} ${country.flag}: ${country.currency.code} (${country.currency.symbol})`,
            value: country.code,
        };
    });

    return (
        <Fragment>
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Appearance Settings', 'donation-form-block')} initialOpen={false}>
                        <PanelRow>
                            <div className="dfb-background-uploader">
                                <p className={'dfb-label'}>
                                    <label>{__('Header image', 'donation-form-block')}</label>
                                </p>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={onSelectBackground}
                                        value={backgroundId}
                                        allowedTypes={['image']}
                                        render={({open}) => (
                                            <Button
                                                className={
                                                    backgroundId === 0
                                                        ? 'editor-post-featured-image__toggle'
                                                        : 'editor-post-featured-image__preview'
                                                }
                                                onClick={open}
                                            >
                                                {backgroundId === 0 && __('Choose an image', 'donation-form-block')}
                                                {background !== undefined && (
                                                    <ResponsiveWrapper
                                                        naturalWidth={background.media_details.width}
                                                        naturalHeight={background.media_details.height}
                                                    >
                                                        <img src={background.source_url} />
                                                    </ResponsiveWrapper>
                                                )}
                                            </Button>
                                        )}
                                    />
                                </MediaUploadCheck>
                                <div className="dfb-background-btns">
                                    {backgroundId !== 0 && (
                                        <MediaUploadCheck>
                                            <MediaUpload
                                                title={__('Replace image', 'donation-form-block')}
                                                value={backgroundId}
                                                onSelect={onSelectBackground}
                                                allowedTypes={['image']}
                                                render={({open}) => (
                                                    <Button
                                                        onClick={open}
                                                        isSmall
                                                        variant="secondary"
                                                        className={'dfb-replace-image-btn'}
                                                    >
                                                        {__('Replace image', 'donation-form-block')}
                                                    </Button>
                                                )}
                                            />
                                        </MediaUploadCheck>
                                    )}
                                    {backgroundId !== 0 && (
                                        <MediaUploadCheck>
                                            <Button onClick={removeBackground} isSmall variant="secondary">
                                                {__('Remove image', 'donation-form-block')}
                                            </Button>
                                        </MediaUploadCheck>
                                    )}
                                </div>
                                <p className={'dfb-help-text'}>
                                    {__('Upload or select an image for the header background.', 'donation-form-block')}
                                </p>
                            </div>
                        </PanelRow>
                        <PanelRow>
                            <div>
                                <label className={'dfb-label'}>{__('Primary Color', 'donation-form-block')}</label>
                                <div className={'dfb-color-picker'}>
                                    <ColorPalette
                                        colors={colors}
                                        value={color}
                                        onChange={(value) => {
                                            if (value) setAttributes({color: value});
                                        }}
                                        clearable={false}
                                    />
                                </div>
                                <p className={'dfb-help-text'}>
                                    {__('Choose the primary color for this donation form.', 'donation-form-block')}
                                </p>
                            </div>
                        </PanelRow>
                    </PanelBody>
                    <PanelBody title={__('Donation Settings', 'donation-form-block')} initialOpen={false}>
                        <PanelRow>
                            <SelectControl
                                label={__('Currency', 'donation-form-block')}
                                value={countryCode}
                                help={__(
                                    'Select the currency for this donation form. Be sure to ensure your Stripe account can accept the chosen currency.',
                                    'donation-form-block'
                                )}
                                options={currencyOptions}
                                onChange={(value) => {
                                    const selectedCurrency = [...listCountries()].find((o) => o.code === value);
                                    setAttributes({
                                        countryCode: selectedCurrency.code,
                                        currencyCode: selectedCurrency.currency.code,
                                        currencySymbol: selectedCurrency.currency.symbol,
                                        languageCode: selectedCurrency.language.code,
                                    });
                                }}
                            />
                        </PanelRow>
                        {currencyCode === 'USD' && (
                            <PanelRow>
                                <ToggleControl
                                    label={__('Enable Stripe Link', 'donation-form-block')}
                                    help={
                                        <>
                                            {__(
                                                'This option allows donors to give using their saved payment methods with Stripe Link. Currently, this option is only available for US donors.',
                                                'donation-form-block'
                                            )}
                                            <ExternalLink href={'https://support.stripe.com/questions/link-faq'}>
                                                {__('Link FAQ', 'donation-form-block')}
                                            </ExternalLink>
                                        </>
                                    }
                                    className={'dfb-stripe-link-toggle'}
                                    checked={enableLink}
                                    onChange={(value) => {
                                        setAttributes({enableLink: value});
                                    }}
                                />
                            </PanelRow>
                        )}
                        <PanelRow>
                            <AmountLevels
                                label={__('Amount Levels', 'donation-form-block')}
                                help={__(
                                    'Add or remove donation amount levels to the form. Use the radio to adjust the default donation amount.',
                                    'donation-form-block'
                                )}
                                donationAmounts={donationAmounts}
                                defaultAmount={defaultAmount}
                                defaultChanged={(newDefault) => setAttributes({defaultAmount: newDefault})}
                                amountChanged={(amounts) => setAttributes({donationAmounts: amounts})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <div className={'dfb-recaptcha-options-wrap'}>
                                <ToggleControl
                                    label={__('Enable Google reCAPTCHA', 'donation-form-block')}
                                    help={
                                        <>
                                            {__(
                                                'Enabling ReCAPTCHA will add a checkbox to the donation form that donors must check before submitting their donation. Many forms of fraud, including card testing, can be prevented by using ReCAPTCHA, a free service provided by Google. Note: enabling this option will enable ReCAPTCHA for all donation forms on your site. ',
                                                'donation-form-block'
                                            )}
                                            <ExternalLink href={'https://www.google.com/recaptcha/admin'}>
                                                {__('Sign up for an API Key', 'donation-form-block')}
                                            </ExternalLink>
                                        </>
                                    }
                                    className={'dfb-recaptcha-link-toggle'}
                                    checked={recaptchaState.enableRecaptchaBackend ? 'checked' : ''}
                                    onChange={(value) => {
                                        dispatch('core').saveEntityRecord('root', 'site', {
                                            dfb_options: {
                                                ...siteSettings.dfb_options,
                                                recaptcha_v2_enable: value,
                                            },
                                        });
                                        setAttributes({enableRecaptchaBackend: value});
                                        setRecaptchaState({...recaptchaState, enableRecaptchaBackend: value});
                                    }}
                                />
                                <div
                                    className={'dfb-recaptcha-options'}
                                    style={{display: recaptchaState.enableRecaptchaBackend ? 'block' : 'none'}}
                                >
                                    <label className={'dfb-label'}>{__('Site Key', 'donation-form-block')}</label>
                                    <input
                                        className={'dfb-input'}
                                        value={recaptchaState.recaptchaSitekey}
                                        type={'password'}
                                        onChange={(e) => {
                                            setRecaptchaState({...recaptchaState, recaptchaSitekey: e.target.value});
                                        }}
                                    />
                                    <p className={'dfb-help-text'}>
                                        {__('Enter your site key.', 'donation-form-block')}
                                    </p>
                                    <label className={'dfb-label dfb-label-secret-key'}>
                                        {__('Secret Key', 'donation-form-block')}
                                    </label>
                                    <input
                                        className={'dfb-input'}
                                        value={recaptchaState.recaptchaSecretKey}
                                        type={'password'}
                                        onChange={(e) => {
                                            setRecaptchaState({
                                                ...recaptchaState,
                                                recaptchaSecretKey: e.target.value,
                                            });
                                        }}
                                    />
                                    <p className={'dfb-help-text'}>
                                        {__('Enter your secret key.', 'donation-form-block')}
                                    </p>
                                    <Button isSecondary onClick={() => submitRecaptchaCreds()}>
                                        {__('Save Keys', 'blocks-for-github')}
                                    </Button>
                                </div>
                            </div>
                        </PanelRow>
                    </PanelBody>
                    <PanelBody title={__('Content Settings', 'donation-form-block')} initialOpen={false}>
                        <PanelRow>
                            <TextControl
                                label={__('Main Heading', 'donation-form-block')}
                                help={__('Customize or delete all text to hide.', 'donation-form-block')}
                                value={attributes.introHeading}
                                onChange={(value) => setAttributes({introHeading: value})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={__('Main Sub-Heading', 'donation-form-block')}
                                help={__('Customize or delete all text to hide.', 'donation-form-block')}
                                value={attributes.introSubheading}
                                onChange={(value) => setAttributes({introSubheading: value})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={__('Fields Heading', 'donation-form-block')}
                                help={__('Customize or delete all text to hide.', 'donation-form-block')}
                                value={attributes.fieldsHeading}
                                onChange={(value) => setAttributes({fieldsHeading: value})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={__('Fields Sub-Heading', 'donation-form-block')}
                                help={__('Customize or delete all text to hide.', 'donation-form-block')}
                                value={attributes.fieldsSubheading}
                                onChange={(value) => setAttributes({fieldsSubheading: value})}
                            />
                        </PanelRow>
                        <PanelRow>
                            <TextControl
                                label={__('Donate Button Text', 'donation-form-block')}
                                help={__(
                                    'Customize the text for the donate button. The maximum text length is 20 characters.',
                                    'donation-form-block'
                                )}
                                value={attributes.donateBtnText}
                                maxLength={20}
                                onChange={(value) => setAttributes({donateBtnText: value})}
                            />
                        </PanelRow>
                    </PanelBody>
                    {userIsAdmin && (
                        <PanelBody title={__('Stripe Connection', 'donation-form-block')} initialOpen={false}>
                            {stripeConnected === false && (
                                <PanelRow>
                                    <div id="dfb-stripe-connect-wrap">
                                        <div className="dfb-welcome-wrap-inner">
                                            <span className="dfb-welcome-wave">👋</span>
                                            <h2>
                                                {__(
                                                    'Welcome to the Stripe Donation Form Block by GiveWP!',
                                                    'donation-form-block'
                                                )}
                                            </h2>
                                            <p>
                                                {__(
                                                    'To begin, connect to Stripe and start accepting donations.',
                                                    'donation-form-block'
                                                )}
                                            </p>
                                            <a
                                                href={`https://connect.givewp.com/stripe/connect.php?stripe_action=connect&return_url=${window.location.origin}?dfb_donation-block-stripe-action=connectToStripe`}
                                                target="_blank"
                                                className={'dfb-stripe-connect'}
                                                onClick={() => setStripeConnectionFlow(true)}
                                            >
                                                <StripeIcon
                                                    style={{
                                                        fill: '#FFF',
                                                        marginRight: '10px',
                                                        height: '25px',
                                                        width: '18px',
                                                        transform: 'scale(.75)',
                                                    }}
                                                />
                                                <span>{__('Connect to Stripe', 'donation-form-block')}</span>
                                            </a>
                                        </div>
                                    </div>
                                </PanelRow>
                            )}
                            {stripeConnected && (
                                <>
                                    <PanelRow>
                                        <div className={'dfb-connected-wrap'}>
                                            <div className={'dfb-connected-circle-wrap'}>
                                                <div className="dfb-connected-circle"></div>
                                            </div>
                                            <span>{__("You're connected to Stripe!", 'donation-form-block')}</span>
                                        </div>
                                    </PanelRow>
                                    <PanelRow>
                                        <ToggleControl
                                            label={__('Toggle on for Live Mode', 'donation-form-block')}
                                            help={
                                                <>
                                                    {__(
                                                        "Enable to accept live payments. Turn off to test the donation process using test payments. Payment methods can be modified via your Stripe account's payment method settings.",
                                                        'donation-form-block'
                                                    )}
                                                    <ExternalLink
                                                        href={'https://dashboard.stripe.com/settings/payment_methods'}
                                                    >
                                                        {__('Adjust payment methods')}
                                                    </ExternalLink>
                                                </>
                                            }
                                            className={'dfb-stripe-live-mode-toggle'}
                                            checked={liveMode}
                                            onChange={(value) => {
                                                setAttributes({liveMode: value});
                                            }}
                                        />
                                    </PanelRow>
                                    <PanelRow className="dfb-stripe-disconnect">
                                        <span className="dfb-stripe-disconnect__link">
                                            <Dashicon icon={'editor-unlink'} />
                                            <Button isLink onClick={() => setDisconnectModalOpen(true)}>
                                                Disconnect from Stripe
                                            </Button>
                                        </span>
                                        <p>
                                            {__(
                                                'Warning: disconnecting from Stripe will prevent all donation forms from accepting payments.',
                                                'donation-form-block'
                                            )}
                                        </p>
                                        {disconnectModalOpen && (
                                            <StripeDisconnectModal
                                                onRequestClose={() => setDisconnectModalOpen(false)}
                                                onDisconnect={() => setStripeConnected(false)}
                                            />
                                        )}
                                    </PanelRow>
                                </>
                            )}
                            <PanelRow>
                                <div className="dfb-stripe-message">
                                    <a href="https://givewp.com/" target="_blank">
                                        <GiveLogo />
                                    </a>
                                    {dfbAdminLocalVars.can_add_fee && (
                                        <p>
                                            {__(
                                                'An additional 2% fee will be added to donations made through this block. Become a GiveWP customer to remove this fee.',
                                                'donation-form-block'
                                            )}{' '}
                                            <a href="https://go.givewp.com/dfb-learn-more" target="_blank">
                                                {__('Learn more', 'donation-form-block')} &raquo;
                                            </a>
                                        </p>
                                    )}
                                    {!dfbAdminLocalVars.can_add_fee && (
                                        <p>
                                            🥳{' '}
                                            {__(
                                                'You are a GiveWP customer! ZERO Stripe fees are being added to this donation form.',
                                                'donation-form-block'
                                            )}
                                        </p>
                                    )}
                                </div>
                            </PanelRow>
                            <PanelRow>
                                <div className="dfb-docs-support-panel-row">
                                    <QuestionIcon className="dfb-docs-support-panel-row__icon" />
                                    <p>
                                        <span>{__('Have Questions?', 'donation-form-block')}</span>
                                        <br />
                                        <a href="https://go.givewp.com/dfb-r-doc" target="_blank">
                                            {__('View docs', 'donation-form-block')}
                                        </a>{' '}
                                        {__('or', 'donation-form-block')}{' '}
                                        <a
                                            href="https://wordpress.org/support/plugin/donation-block-for-stripe-by-givewp/"
                                            target="_blank"
                                        >
                                            {__('ask support', 'donation-form-block')}
                                        </a>
                                        .
                                    </p>
                                </div>
                            </PanelRow>
                        </PanelBody>
                    )}
                </InspectorControls>
            </Fragment>
            <Fragment>
                <div {...blockProps}>
                    {stripeConnectionFlow && (
                        <div id="dfb-connected-lottie-wrap">
                            <p className={'dfb-lottie-connected-text'}>
                                {__("You're Connected to Stripe", 'donation-form-block')} 🎉
                            </p>
                            <div id="dfb-connected-lottie"></div>
                        </div>
                    )}
                    <DonationForm attributes={attributes} backend stripeConnected={stripeConnected} />
                </div>
            </Fragment>
        </Fragment>
    );
}
