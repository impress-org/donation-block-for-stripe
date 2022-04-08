<?php

declare(strict_types=1);

namespace GiveDonationBlock;

use GiveDonationBlock\Stripe\DataTransferObjects\StripeData;
use GiveDonationBlock\Stripe\Controllers\PaymentIntentRequest as PaymentIntentRequest;

class DonationBlock
{
    public function registerBlock(): void
    {
        // Check if Gutenberg is active.
        if (!function_exists('register_block_type')) {
            return;
        }

        wp_register_script(
            'donation-form-block-script',
            plugins_url('build/index.js', DONATION_BLOCK_FILE),
            DONATION_BLOCK_SCRIPT_ASSET['dependencies'],
            DONATION_BLOCK_SCRIPT_ASSET['version']
        );
        wp_register_script(
            'donation-form-block-stripe-js',
            'https://js.stripe.com/v3/'
        );

        register_block_type(DONATION_BLOCK_PATH,
            ['render_callback' => [$this, 'renderBlock']]
        );
    }

    public function renderBlock($attributes)
    {
        if (!is_admin()) {
            wp_enqueue_script('donation-form-block-script');
            wp_enqueue_script('donation-form-block-stripe-js');
            wp_set_script_translations('donation-form-block-script', 'donation-form-block');
            wp_localize_script('donation-form-block-stripe-js', 'donationFormBlock', [
                'nonce' => wp_create_nonce('donation-form-block'),
                'plugin_version' => DONATION_BLOCK_VERSION,
            ]);
        }

        $stripeData = StripeData::fromOption();
        $livePublishableKey = $stripeData->livePublishableKey ?? '';
        $testPublishableKey = $stripeData->testPublishableKey ?? '';

        ob_start(); ?>

        <div id="donation-form-block-<?php
        echo esc_html($attributes['formId']); ?>" class="root-donation-block"
             data-stripe-live-pub-key="<?php esc_html_e($livePublishableKey); ?>"
             data-stripe-test-pub-key="<?php esc_html_e($testPublishableKey); ?>"
            <?php
            // 🔁 Loop through and set attributes per block.
            foreach ($attributes as $key => $value) :
                // Arrays need to be stringified.
                if (is_array($value)) {
                    $value = implode(', ', $value);
                } ?>
                data-<?php
                // output as hyphen-case so that it's changed to camelCase in JS.
                echo preg_replace('/([A-Z])/', '-$1', $key); ?>="<?php
                echo esc_html($value); ?>"
            <?php
            endforeach; ?>
        ></div>
        <?php
        // return clean buffer
        return ob_get_clean();
    }

    public function addAdminLocalizations(): void
    {
        wp_localize_script(
            'givewp-donation-form-block-editor-script',
            'dfbAdminLocalVars',
            [
                'profile_preview' => plugin_dir_url(DONATION_BLOCK_FILE) . 'src/images/donation-form-preview.jpg',
                'can_add_fee' => PaymentIntentRequest::canAddFee(),
            ]
        );
    }
}
