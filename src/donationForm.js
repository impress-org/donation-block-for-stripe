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
                <p className={css(styles.formParagraph)}>Stripe needs to be connected in order to begin accepting
                    donations.</p>
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
                    <div className={'donation-form-fieldset-intro'}>
                        {props.attributes.introHeading &&
                            <h2 className={`donation-form-main-heading ${css(styles.formHeading)}`}>{props.attributes.introHeading}</h2>
                        }
                        {props.attributes.introSubheading &&
                            <p className={`donation-form-main-subheading ${css(styles.formParagraph)}`}>{props.attributes.introSubheading}</p>
                        }
                        <form onSubmit={handleSubmit}>
                            <div className={`donation-form-field-row ${styles.formFieldRow}`}>
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
                                                className={`
                                                ${cx('donation-form-amount-btn', {
                                                    'is-selected': donationAmount === amount
                                                })} ${css(styles.buttonBase, styles.buttonPrimary)}
                                                `}
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
                            <div className={`donation-form-field-row`}>
                                {props.attributes.fieldsHeading &&
                                    <h3 className={`donation-form-fields-heading ${css(styles.formHeading)}`}>{props.attributes.fieldsHeading}</h3>
                                }
                                {props.attributes.fieldsSubheading &&
                                    <p className={`donation-form-fields-subheading ${css(styles.formParagraph)}`}>{props.attributes.fieldsSubheading}</p>
                                }
                            </div>

                            <div className={`donation-form-field-row donation-form-fields-wrap ${css(styles.donationFormFieldsRow)}`}>
                                <input
                                    className={cx('donation-form-field', 'donation-form-first-name')}
                                    type={'text'}
                                    placeholder={__('First Name', 'donation-form-block')}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required={true}
                                />
                                <input
                                    className={cx('donation-form-field', 'donation-form-last-name')}
                                    type={'text'}
                                    placeholder={__('Last Name', 'donation-form-block')}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required={false}
                                />
                                <input
                                    className={cx('donation-form-field', 'donation-form-email')}
                                    type={'email'}
                                    placeholder={__('Email', 'donation-form-block')}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={true}
                                />
                                <input
                                    type={'submit'}
                                    value={'Donate Now'}
                                    className={cx('donation-form-submit')}
                                />
                            </div>
                            {window.location.protocol === 'https:' &&
                                <div className={cx('donation-form-field-row')}>
                                    <div className={cx('donation-form-secure-badge')}>
                                        {__('100% Secure', 'donation-form-block')}
                                    </div>
                                </div>
                            }
                        </form>
                    </div>
                </div>
                <div className="paymentIntentForm">

                </div>
            </div>
        </div>
    );

}

DonationForm.defaultProps = {
    attributes: [],
};

export default DonationForm;
