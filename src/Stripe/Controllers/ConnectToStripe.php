<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\Controllers;

class ConnectToStripe
{
    public function __invoke()
    {
        [
            'stripe_access_token' => $stripeLiveAccessToken,
            'stripe_access_token_test' => $stripeTestAccessToken,
            'stripe_publishable_key' => $stripeLivePublishableKey,
            'stripe_publishable_key_test' => $stripeTestPublishableKey,
            'stripe_user_id' => $stripeAccountId
        ] = $_GET;

        update_option('dfb_donation_block_stripe_data', [
            'stripeLiveSecretKey' => $stripeLiveAccessToken,
            'stripeTestSecretKey' => $stripeTestAccessToken,
            'stripeLivePublishableKey' => $stripeLivePublishableKey,
            'stripeTestPublishableKey' => $stripeTestPublishableKey,
            'stripeAccountId' => $stripeAccountId
        ]);

        echo '<script>window.close();</script>';
        exit;
    }
}
