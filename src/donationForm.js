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
import Radium from 'radium';
import color from 'color';

/**
 * Donation Form.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const DonationForm = props => {

    const [donationAmount, setDonationAmount] = useState('25');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const updateDonationAmount = (amount) => {
        amount = amount.replace('$', '');
        setDonationAmount(amount);
    };

    const styles = {
        buttonBase: {
            color: '#FFF',
            background: `${props.attributes.color}`,
            borderRadius: '6px',
            border: `3px solid ${props.attributes.color}`,
            fontSize: '28px',
            fontWeight: '500',
            transition: 'all 0.2s ease',
            lineHeight: '1.6',
            cursor: 'pointer',
        },
        buttonPrimary: {
            ':hover': {
                background: color(`${props.attributes.color}`).lighten(0.2),
                border: color(`${props.attributes.color}`).lighten(0.2)
            },
        },
        buttonSelected: {
            color: `${props.attributes.color}`,
            background: '#FFF',
        },
        currencyField: {
            width: '100%',
            fontSize: '2.5rem',
            padding: '1rem 1.5rem',
            border: '2px solid #424242',
            borderRadius: '8px',
            textAlign: 'right',
            lineHeight: '1',
            boxSizing: 'border-box',
        }
    };

    const donationAmounts = [
        '5', '10', '25', '50', '100', '250'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Validate form.
        // TODO: Fetch Stripe Payment Intent.

    }

    return (
        <div id={'donation-form-block'} className={cx('donation-form')}>
            <div className="donation-form-header"
                 style={{
                     backgroundImage: `url(${props.attributes.backgroundUrl})`
                 }}></div>
            <div className="donation-form-inner">
                <div className={'donation-form-fieldset-intro'}>
                    {props.attributes.introHeading &&
                        <h2 className={'donation-form-main-heading'}>{props.attributes.introHeading}</h2>
                    }
                    {props.attributes.introSubheading &&
                        <p className={'donation-form-main-subheading'}>{props.attributes.introSubheading}</p>
                    }
                    <form onSubmit={handleSubmit}>
                        <div className="donation-form-field-row">
                            <CurrencyInput
                                className="donation-form-amount-input"
                                style={styles.currencyField}
                                name="donation-amount"
                                allowDecimals={false}
                                allowNegativeValue={false}
                                maxLength={6}
                                value={donationAmount}
                                defaultValue={donationAmount}
                                onValueChange={(value, name) => updateDonationAmount(value)}
                            />
                        </div>
                        <div className="donation-form-field-row donation-form-amount-btns">
                            {
                                donationAmounts.map((amount, index) => {
                                    return (
                                        <button
                                            key={index}
                                            className={cx('donation-form-amount-btn', {
                                                'is-selected': donationAmount === amount
                                            })}
                                            style={[
                                                styles.buttonBase,
                                                donationAmount === amount ? styles.buttonSelected : styles.buttonPrimary
                                            ]}
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
                        <div className="donation-form-field-row">
                            {props.attributes.fieldsHeading &&
                                <h3 className={'donation-form-fields-heading'}>{props.attributes.fieldsHeading}</h3>
                            }
                            {props.attributes.fieldsSubheading &&
                                <p className={'donation-form-fields-subheading'}>{props.attributes.fieldsSubheading}</p>
                            }
                        </div>

                        <div className={cx('donation-form-field-row', 'donation-form-fields-wrap')}>
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
                                style={[styles.buttonBase, styles.buttonPrimary]}
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
        </div>
    );

}

DonationForm.defaultProps = {
    attributes: [],
};

export default Radium(DonationForm);
