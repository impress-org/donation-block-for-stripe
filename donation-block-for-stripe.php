<?php
/**
 * Plugin Name:       Donation Block for Stripe by GiveWP
 * Plugin URI:        https://go.givewp.com/donation-block-for-stripe
 * Description:       A beautiful donation form block for Stripe by GiveWP. Accept donations in minutes.
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Version:           1.1.1
 * Author:            GiveWP
 * Author URI:        https://givewp.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       donation-form-block
 * Domain Path:       /languages
 */

use GiveDonationBlock\Bootstrap;

define('DONATION_BLOCK_VERSION', '1.1.1');
define('DONATION_BLOCK_FILE', __FILE__);
define('DONATION_BLOCK_PATH', plugin_dir_path(__FILE__));
define('DONATION_BLOCK_SCRIPT_ASSET', require(DONATION_BLOCK_PATH . 'build/index.asset.php'));

require_once 'vendor/autoload.php';

$bootstrapPlugin = new Bootstrap();
$bootstrapPlugin->init();
