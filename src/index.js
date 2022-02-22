/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {registerBlockType} from '@wordpress/blocks';
import {__} from '@wordpress/i18n';
import GiveIcon from './giveIcon';

/**
 * Internal dependencies
 */
import Edit from './edit';

import DonationForm from './donationForm';
import domReady from '@wordpress/dom-ready';
import {render} from '@wordpress/element';
import {compose, withInstanceId} from '@wordpress/compose'

/**
 * Register the Block.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('givewp/donation-form-block', {

    title: __('Donation Form Block', 'donation-form-block'),
    icon: <GiveIcon color="grey"/>,

    edit: withInstanceId(Edit),

    save: () => {
        return null;
    }

});

domReady(function () {

    // Don't run when Gutenberg / Block editor is active.
    if (document.body.classList.contains('block-editor-page')) {
        return;
    }

    const donationForms = document.querySelectorAll('.root-donation-block');

    donationForms.forEach(donationForm => {
        const attributes = donationForm.dataset;
        console.log(attributes);
        render(
            <DonationForm attributes={attributes}/>,
            donationForm
        );
    });


});
