<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\Controllers;

class DisconnectFromStripe
{
    public function __invoke()
    {
        if (!current_user_can('manage_options')) {
            wp_send_json_error('Insufficient permissions', 403);
        }

        delete_option('dfb_donation_block_stripe_data');
        wp_send_json_success();
    }
}
