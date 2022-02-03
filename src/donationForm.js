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
import {dispatch, useSelect} from '@wordpress/data';

export default function DonationForm(props) {

	const [donationAmount, setDonationAmount] = useState(25);

	const updateDonationAmount = (amount) => {
		setDonationAmount(amount);
	};

	let backgroundColor = {
		background: props.attributes.color
	};

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

					<form>
						<div className="donation-form-field-row">
							<CurrencyInput
								className="donation-form-amount-input"
								name="donation-amount"
								allowDecimals={false}
								allowNegativeValue={false}
								maxLength={6}
								value={donationAmount}
								defaultValue={donationAmount}
								onValueChange={(value, name) => console.log(value, name)}
							/>
						</div>
						<div className="donation-form-field-row donation-form-amount-btns">
							<input
								type={'button'}
								value={'5'}
								style={backgroundColor}
								className={'donation-form-field-button'}
								onClick={(e) => setDonationAmount(e.target.value)}
							/>
							<input
								type={'button'}
								value={'10'}
								style={backgroundColor}
								className={'donation-form-field-button'}
								onClick={(e) => setDonationAmount(e.target.value)}
							/>
							<input
								type={'button'}
								value={'25'}
								style={backgroundColor}
								className={'donation-form-field-button'}
								onClick={(e) => setDonationAmount(e.target.value)}
							/>
							<input
								type={'button'}
								value={'50'}
								style={backgroundColor}
								className={'donation-form-field-button'}
								onClick={(e) => setDonationAmount(e.target.value)}
							/>
							<input
								type={'button'}
								value={'100'}
								style={backgroundColor}
								className={'donation-form-field-button'}
								onClick={(e) => setDonationAmount(e.target.value)}
							/>
							<input
								type={'button'}
								value={'250'}
								style={backgroundColor}
								className={'donation-form-field-button'}
								onClick={(e) => setDonationAmount(e.target.value)}
							/>
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
								placeholder={''}
							/>
							<input
								className={cx('donation-form-field', 'donation-form-last-name')}
								type={'text'}
								placeholder={''}
							/>
							<input
								className={cx('donation-form-field', 'donation-form-email')}
								type={'email'}
								placeholder={''}
							/>
							<input
								type={'button'}
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
		</div>
	);

}

DonationForm.defaultProps = {
	attributes: [],
};
