<?php

declare(strict_types=1);

namespace GiveDonationBlock;

use GiveDonationBlock\Stripe\Controllers\RouteStripeActions;

class Bootstrap
{
    public function init(): void
    {
        $this->registerHooks();
    }

    private function registerHooks(): void
    {
        $block = new DonationBlock();
        add_action('init', [$block, 'registerBlock']);
        add_action('admin_enqueue_scripts', [$block, 'addAdminLocalizations']);

        $stripeActionHandler = new RouteStripeActions();
        add_action('template_redirect', [$stripeActionHandler, '__invoke']);
        add_action('wp_ajax_dfb_stripe_connection', [$this, 'getStripeConnection']);
    }


    public function getStripeConnection()
    {
        $stripeConnection = get_option('dfb_donation_block_stripe_data');
        if (!$stripeConnection) {
            wp_send_json(false);
        }
        wp_send_json(true);
    }
}
