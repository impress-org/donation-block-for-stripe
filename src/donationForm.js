/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import {useEffect, useState} from '@wordpress/element';
import cx from 'classnames';
import {__} from '@wordpress/i18n';
import CurrencyInput from 'react-currency-input-field';
import axios from 'axios';
import StyleSheetFactory from "./frontendStyles";
import {css} from 'aphrodite';
import {ReactComponent as AlertIcon} from './images/alert.svg';
import {ReactComponent as LockIcon} from './images/lock.svg';
import {ReactComponent as MailIcon} from './images/mail.svg';
import {ReactComponent as UserIcon} from './images/user.svg';
import {ReactComponent as CaretIcon} from './images/caret-right.svg';
import {ReactComponent as DollarIcon} from './images/dollar.svg';

/**
 * Donation Form.
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

    const updateDonationAmount = (amount) => {
        amount = amount.replace('$', '');
        setDonationAmount(amount);
    };

    const donationAmounts = [
        '5', '10', '25', '50', '100', '250'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/?dfb_donation-block-stripe-action=getStripeIntent', {
            amount: donationAmount * 100,
            firstName: firstName,
            lastName: lastName,
            email: email
        }).then(function (response) {

            // TODO: Validate form.

            console.log(response);
            console.log();

            const stripe = Stripe(props.attributes.stripePubKey);
            const clientSecret = response.data.data.clientSecret;
            let elements = stripe.elements({clientSecret});

            const paymentElement = elements.create('payment');
            paymentElement.mount('.paymentIntentForm');

        }).catch(function (error) {

            console.log(error);

        });

    }

    return (
        <div className={'donation-form-block-wrap'}>
            <div className={`donation-form-notice ${css(styles.noticeBase)}`}>
                <AlertIcon className={css(styles.noticeIcon)}/>
                <p className={css(styles.formParagraph, styles.noticeParagraph)}>{'Stripe needs to be connected in order to begin accepting donations.'}</p>
            </div>
            <div className={`donation-form-block ${css(styles.formContainer)}`}>
                {props.attributes.backgroundUrl &&
                    <div
                        className={`donation-form-header ${css(styles.formHeaderImage)}`}
                        style={{
                            backgroundImage: `url(${props.attributes.backgroundUrl})`
                        }}></div>
                }
                <div className={`donation-form-inner ${css(styles.formContainerInner)}`}>
                    <div className={`donation-form-fieldset-intro ${css(styles.introWrap)}`}>
                        {props.attributes.introHeading &&
                            <h2 className={`donation-form-main-heading ${css(styles.formHeading)}`}>{props.attributes.introHeading}</h2>
                        }
                        {props.attributes.introSubheading &&
                            <p className={`donation-form-main-subheading ${css(styles.formParagraph)}`}>{props.attributes.introSubheading}</p>
                        }
                    </div>
                    <form onSubmit={handleSubmit}>
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
                                            {amount}
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
                                Donate Now
                                <CaretIcon className={css(styles.donateBtnIcon)}/>
                            </button>
                        </div>
                        {window.location.protocol === 'https:' &&
                            <div className={`donation-form-secure-wrap ${css(styles.secureFooter)}`}>
                                <LockIcon className={`donation-form-lock-icon ${css(styles.iconLock)}`}/>
                                {__('100% Secure Donation', 'donation-form-block')}
                            </div>
                        }
                    </form>

                    <div className="paymentIntentForm">

                    </div>
                </div>
            </div>
        </div>
    );

}

DonationForm.defaultProps = {
    attributes: [],
};

export default DonationForm;
