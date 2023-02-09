<?php

declare(strict_types=1);

namespace GiveDonationBlock;

use GiveDonationBlock\Stripe\Controllers\PaymentIntentRequest as PaymentIntentRequest;
use GiveDonationBlock\Stripe\DataTransferObjects\StripeData;

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

        register_block_type(
            DONATION_BLOCK_PATH,
            ['render_callback' => [$this, 'renderBlock']]
        );
    }

    public function registerSettings(): void
    {
        register_setting(
            'dfb_options',
            'dfb_options',
            [
                'type' => 'object',
                'description' => 'Donation Form Block Options',
                'show_in_rest' => [
                    'schema' => [
                        'type' => 'object',
                        'properties' => [
                            'recaptcha_v2_secret_key' => [
                                'type' => 'string',
                            ],
                            'recaptcha_v2_site_key' => [
                                'type' => 'string',
                            ],
                            'recaptcha_v2_enable' => [
                                'type' => 'boolean',
                            ],
                        ]
                    ],
                ],
                'default' => '',
            ]
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

        $pluginOptions = get_option('dfb_options');
        $recaptchaEnabled = $pluginOptions['recaptcha_v2_enable'] ? 1 : 0;
        $recaptchaSitekey = $pluginOptions['recaptcha_v2_site_key'] ?? false;

        ob_start(); ?>

        <div id="donation-form-block-<?php
        echo esc_html($attributes['formId']); ?>" class="root-donation-block"
             data-stripe-live-pub-key="<?php
             esc_html_e($livePublishableKey); ?>"
             data-stripe-test-pub-key="<?php
             esc_html_e($testPublishableKey); ?>"
             data-recaptcha-enabled="<?php
             esc_html_e($recaptchaEnabled); ?>"
             data-recaptcha-sitekey="<?php
             esc_html_e($recaptchaSitekey); ?>"
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
        >
            <?php
            if (!is_ssl()) : ?>
                <div class="donation-form-block__error"
                     style="font-size:16px; color: #252121; background: #f4a9a9; border: 1px solid #eb3131; padding: 10px 14px; margin: 0 0 15px; border-radius: 5px;">
                    <?php
                    echo esc_html__(
                        'Your site is not using HTTPS. Please enable HTTPS to use the donation form.',
                        'donation-form-block'
                    ); ?>
                </div>
            <?php
            endif; ?>
        </div>
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
