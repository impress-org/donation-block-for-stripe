<?php

declare(strict_types=1);

namespace GiveDonationBlock;

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
            plugins_url('build/index.js', DONATION_BLOCK_FILE ),
            DONATION_BLOCK_SCRIPT_ASSET['dependencies'],
            DONATION_BLOCK_SCRIPT_ASSET['version']
        );
        wp_register_script(
            'donation-form-block-stripe-js',
            'https://js.stripe.com/v3/'
        );

        wp_set_script_translations('donation-form-block-script', 'donation-form-block');

        register_block_type(DONATION_BLOCK_PATH,
            ['render_callback' => [$this, 'renderBlock']]
        );
    }

    public function renderBlock($attributes)
    {
        if (!is_admin()) {
            wp_enqueue_script('donation-form-block-script');
            wp_enqueue_script('donation-form-block-stripe-js');
        }

        $stripeData = StripeData::fromOption();

        ob_start(); ?>

        <div class="root-donation-block"
             data-stripe-pub-key="<?php echo $stripeData->testPublishableKey; ?>"
            <?php
            // Loop through and set attributes per block.
            foreach ($attributes as $key => $value) : ?>
                data-<?php
                // output as hyphen-case so that it's changed to camelCase in JS.
                echo preg_replace('/([A-Z])/', '-$1', $key); ?>="<?php
                echo $value; ?>"
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
            'dfbPreview',
            array(
                'profile_preview' => plugin_dir_url(DONATION_BLOCK_FILE) . 'src/images/donation-form-preview.jpg',
            )
        );
    }
}