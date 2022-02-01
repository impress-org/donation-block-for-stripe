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

export default function DonationForm(props) {

	return (
		<div className={'donation-form'}>
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
							<input
								className={'donation-form-field-amount'}
								type={'text'}
								placeholder={'$25'}
							/>
						</div>
						<div className="donation-form-field-row donation-form-amount-btns">
							<input
								type={'button'}
								value={'$5'}
								className={'donation-form-field-button'}
							/>
							<input
								type={'button'}
								value={'$10'}
								className={'donation-form-field-button'}
							/>
							<input
								type={'button'}
								value={'$25'}
								className={'donation-form-field-button'}
							/>
							<input
								type={'button'}
								value={'$50'}
								className={'donation-form-field-button'}
							/>
							<input
								type={'button'}
								value={'$50'}
								className={'donation-form-field-button'}
							/>
							<input
								type={'button'}
								value={'$50'}
								className={'donation-form-field-button'}
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
