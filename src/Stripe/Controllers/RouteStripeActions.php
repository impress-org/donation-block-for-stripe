<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\Controllers;

class RouteStripeActions
{
    /**
     * Routes to various Stripe actions based on the dfb_donation-block-stripe-action query parameter.
     */
    public function __invoke()
    {
        if (empty($_GET['dfb_donation-block-stripe-action'])) {
            return;
        }
        $action = $_GET['dfb_donation-block-stripe-action'];

        if ($action === 'getStripeIntent') {
            $handler = new PaymentIntentRequest();
            $handler();
        }

        if ( $action === 'connectToStripe' ) {
            $handler = new ConnectToStripe();
            $handler();
        }
    }
}
