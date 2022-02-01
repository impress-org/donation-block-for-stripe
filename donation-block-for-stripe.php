<?php
/**
 * Plugin Name:       Donation Block for Stripe by GiveWP
 * Description:       A beautiful donation form block for Stripe by GiveWP. Accept donations in minutes.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            GiveWP
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       donation-form-block
 *
 * @package           create-block
 */


define("DONATION_BLOCK_SCRIPT_ASSET", require(plugin_dir_path(__FILE__) . 'build/index.asset.php'));

/**
 * @return void
 */
function create_donation_form_block_init()
{
	// Check if Gutenberg is active.
	if (!function_exists('register_block_type')) {
		return;
	}

	wp_register_script(
			'donation-form-block-script',
			plugins_url('build/index.js', __FILE__),
			DONATION_BLOCK_SCRIPT_ASSET['dependencies'],
			DONATION_BLOCK_SCRIPT_ASSET['version']
	);

	wp_set_script_translations('donation-form-block-script', 'donation-form-block');

	register_block_type(__DIR__,
			['render_callback' => 'donation_block_for_stripe_render']
	);
}

add_action('init', 'create_donation_form_block_init');

/**
 * Localize editor scripts.
 *
 * @return void
 */
function blocks_for_github_localize_scripts()
{
	$return = wp_localize_script(
			'givewp-donation-form-block-editor-script',
			'dfbPreview',
			array(
					'profile_preview' => plugin_dir_url(__FILE__) . 'src/images/donation-form-preview.jpg',
			)
	);

	error_log( print_r( $return . PHP_EOL, true ), 3, './debug_custom.log' );
}

add_action('admin_enqueue_scripts', 'blocks_for_github_localize_scripts');

/**
 * Render the donation form block.
 *
 * @param $attributes
 * @return false|string
 */
function donation_block_for_stripe_render($attributes)
{
	if (!is_admin()) {
		wp_enqueue_script('donation-form-block-script');
	}

	ob_start(); ?>

	<div id="root-donation-block"
			<?php
			// Loop through and set attributes per block.
			foreach ($attributes as $key => $value) : ?>
				data-<?php
				// output as hyphen-case  so that it's changed to camelCase in JS.
				echo preg_replace('/([A-Z])/', '-$1', $key); ?>="<?php
				echo $value; ?>"
			<?php
			endforeach; ?>
	></div>
	<?php
	// return clean buffer
	return ob_get_clean();
}


/**
 * Require WP version 5.2+ because of hooks used.
 */
register_activation_hook(
		__FILE__,
		function () {
			if (!version_compare($GLOBALS['wp_version'], '5.2', '>=')) {
				wp_die(
						esc_html__(
								'The Donation Form Block requires WordPress version 5.2 or greater.',
								'donation-form-block'
						),
						esc_html__('Error Activating', 'donation-form-block')
				);
			}
		}
);
