<?php
/**
 * Plugin Name:       Donation Block for Stripe by GiveWP
 * Description:       A beautiful donation form block for Stripe by GiveWP. Accept donations in minutes.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            GiveWP
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       donation-form-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_donation_form_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_donation_form_block_init' );

/**
 * Require WP version 5.2+ because of hooks used.
 */
register_activation_hook(
	__FILE__,
	function () {
		if ( ! version_compare( $GLOBALS['wp_version'], '5.2', '>=' ) ) {
			wp_die(
				esc_html__( 'Blocks for GitHUb requires WordPress version 5.2 or greater.', 'blocks-for-github' ),
				esc_html__( 'Error Activating', 'blocks-for-github' )
			);
		}
	}
);
