<?php

declare(strict_types=1);

namespace GiveDonationBlock;

use GiveDonationBlock\Stripe\Controllers\ConnectToStripe;
use GiveDonationBlock\Stripe\Controllers\PaymentIntentRequest;
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
        add_action('rest_api_init', [$this, 'registerSettings']);
        add_action('admin_init', [$this, 'registerSettings']);
        add_action('wp_ajax_dfb_stripe_connection', [$this, 'getStripeConnection']);
    }

    public function registerSettings()
    {
        register_setting(
            'dfb_donation_block_stripe_data',
            'dfb_donation_block_stripe_data',
            [
                'show_in_rest' => [
                    'schema' => [
                        'name' => 'dfb_stripe_connect',
                        'type' => 'object',
                        'properties' => [
                            'stripeLiveSecretKey' => [
                                'type' => 'string',
                            ],
                            'stripeTestSecretKey' => [
                                'type' => 'string',
                            ],
                            'stripeLivePublishableKey' => [
                                'type' => 'string',
                            ],
                            'stripeTestPublishableKey' => [
                                'type' => 'string',
                            ],
                            'stripeAccountId' => [
                                'type' => 'string',
                            ],
                        ],
                    ],
                ],
            ]
        );
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
