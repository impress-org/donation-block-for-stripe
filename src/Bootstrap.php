<?php

declare(strict_types=1);

namespace GiveDonationBlock;

use GiveDonationBlock\Stripe\Controllers\ConnectToStripe;

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

        $stripeConnect = new ConnectToStripe();
        add_action('template_redirect', [$stripeConnect, '__invoke']);
    }
}
