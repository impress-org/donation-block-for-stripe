/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';
import DonationForm from './donationForm';
import {
	PanelBody,
	PanelRow,
	TextControl,
	Button,
	Spinner,
	ResponsiveWrapper,
} from '@wordpress/components';
import {Fragment, useState, useEffect} from '@wordpress/element';
import {InspectorControls, MediaUpload, useBlockProps, MediaUploadCheck} from '@wordpress/block-editor';
import {dispatch, useSelect} from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Edit function.
 *
 *  @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	const {
		backgroundId,
		backgroundUrl,
		introHeading,
		introSubheading,
		preview,
	} = attributes;

	// Preview image when an admin hovers over the block.
	if (preview) {
		return (
			<Fragment>
				<img src={dfbPreview.profile_preview} alt={'Donation form block for Stripe by GiveWP.'}
					 style={{width: '100%', height: 'auto'}}/>
			</Fragment>
		);
	}

	const removeBackground = () => {
		setAttributes({
			backgroundId: 0,
			backgroundUrl: ''
		});
	};

	const onSelectBackground = (background) => {
		setAttributes({
			backgroundId: background.id,
			backgroundUrl: background.url
		});
	};

	const background = useSelect((select) => {
		return select('core').getMedia(backgroundId);
	}, [onSelectBackground]);

	return (

		<Fragment>
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Appearance Settings', 'donation-form-block')} initialOpen={true}>
						<PanelRow>
							<div className="dfb-background-uploader">
								<p className={'dfb-label'}>
									<label>{__('Header background image', 'donation-form-block')}</label>
								</p>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectBackground}
										value={attributes.backgroundId}
										allowedTypes={['image']}
										render={({open}) => (
											<Button
												className={attributes.backgroundId === 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
												onClick={open}
											>
												{attributes.backgroundId === 0 && __('Choose an image', 'donation-form-block')}
												{background !== undefined &&
													<ResponsiveWrapper
														naturalWidth={background.media_details.width}
														naturalHeight={background.media_details.height}
													>
														<img src={background.source_url}/>
													</ResponsiveWrapper>
												}
											</Button>
										)}
									/>
								</MediaUploadCheck>
								<div className="dfb-background-btns">
									{attributes.backgroundId !== 0 &&
										<MediaUploadCheck>
											<MediaUpload
												title={__('Replace image', 'donation-form-block')}
												value={attributes.backgroundId}
												onSelect={onSelectBackground}
												allowedTypes={['image']}
												render={({open}) => (
													<Button onClick={open} isSmall variant="secondary"
															className={'dfb-replace-image-btn'}>{__('Replace image', 'donation-form-block')}</Button>
												)}
											/>
										</MediaUploadCheck>
									}
									{attributes.backgroundId !== 0 &&
										<MediaUploadCheck>
											<Button onClick={removeBackground} isSmall
													variant="secondary">{__('Remove image', 'donation-form-block')}</Button>
										</MediaUploadCheck>
									}
								</div>
								<p className={'dfb-help-text'}>{__('Upload or select an image for the header background.', 'donation-form-block')}</p>
							</div>
						</PanelRow>
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
					</PanelBody>
				</InspectorControls>
			</Fragment>
			<Fragment>
				<div {...useBlockProps()}>
					<DonationForm attributes={attributes}/>
				</div>
			</Fragment>
		</Fragment>

	);
}
