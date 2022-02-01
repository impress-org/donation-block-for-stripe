/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';

import DonationForm from './donationForm';
import domReady from '@wordpress/dom-ready';
import {render} from '@wordpress/element';

/**
 * Register the Block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('givewp/donation-form-block', {

	title: __('Donation Form Block', 'donation-form-block'),

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save: () => {
		return null;
	}

});

domReady(function () {

	// Don't run when Gutenberg / Block editor is active.
	if (document.body.classList.contains('block-editor-page')) {
		return;
	}

	const blockLauncherElement = document.querySelector('#root-donation-block');
	const attributes = blockLauncherElement.dataset;

	if (blockLauncherElement) {
		render(
			<DonationForm attributes={attributes}/>,
			blockLauncherElement
		);
	}
});
