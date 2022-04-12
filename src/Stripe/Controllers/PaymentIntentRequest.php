<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\Controllers;

use GiveDonationBlock\Stripe\DataTransferObjects\PaymentIntentForm;
use GiveDonationBlock\Stripe\DataTransferObjects\StripeData;

use Give_License;

use function sanitize_text_field;
use function wp_send_json_error;

class PaymentIntentRequest
{
    public function __invoke()
    {
        $data = $this->getValidatedData();

        if (!wp_verify_nonce($data->nonce ?? '', 'donation-form-block')) {
            wp_send_json_error([
                'error' => 'invalid_nonce',
                'message' => __('Invalid nonce. Refresh browser.', 'give-donation-block'),
            ]);
        }

        $stripeData = StripeData::fromOption();

        if ($stripeData === null) {
            wp_send_json_error([
                'error' => 'stripe_not_connected',
                'message' => 'Stripe is not connected. Please notify site owner to connect.',
            ]);
        }

        $url = 'https://api.stripe.com/v1/payment_intents';

        $args = [
            'amount' => $data->amount,
            'currency' => $data->currency,
            'receipt_email' => $data->email,
            'application_fee_amount' => $this->canAddFee() ? ceil($data->amount * 0.02) : 0,
            'automatic_payment_methods' => [
                'enabled' => 'true',
            ],
        ];

        // Update payment intent or create a new one?
        if ($data->paymentIntent) {
            // Update URL to update payment intent.
            $url = $url . '/' . $data->paymentIntent;
            // Remove automatic_payment_methods from args.
            unset($args['automatic_payment_methods']);
        }

        $paymentIntentRequest = wp_remote_post(
            $url,
            [
                'headers' => ['Authorization' => 'Bearer ' . ($data->liveMode ? $stripeData->liveSecretKey : $stripeData->testSecretKey)],
                'user-agent' => 'WordPress GiveDonationBlock/' . DONATION_BLOCK_VERSION . ' (https://givewp.com)',
                'body' => $args
            ]
        );

        if (is_wp_error($paymentIntentRequest)) {
            wp_send_json_error([
                'error' => 'wordpress_error',
                'message' => 'There was an error setting up your donation. Please contact the site owner.',
            ]);
        } else {
            $apiBody = json_decode(wp_remote_retrieve_body($paymentIntentRequest));

            // Check for Stripe errors
            if (isset($apiBody->error)) {
                wp_send_json_error([
                    'error' => 'stripe_error',
                    'message' => 'There was an error setting up your donation. Please contact the site owner.',
                ]);
            } else {
                wp_send_json_success([
                    'clientSecret' => $apiBody->client_secret,
                    'paymentIntent' => $apiBody->id,
                ]);
            }
        }
    }

    private function getValidatedData(): PaymentIntentForm
    {
        $requiredFields = [
            'amount' => 'Amount',
            'firstName' => 'First Name',
            'email' => 'Email',
        ];
        $request_body = file_get_contents('php://input');
        $postData = json_decode($request_body, true);
        $data = [];
        $missingFields = [];

        foreach ($requiredFields as $field => $label) {
            if (empty($postData[$field])) {
                $missingFields[] = [
                    'field' => $field,
                    'message' => "$label is required."
                ];
            } elseif ($field === 'email') {
                $data[$field] = sanitize_email($postData[$field]);
            } else {
                $data[$field] = sanitize_text_field($postData[$field]);
            }
        }

        if (!empty($missingFields)) {
            wp_send_json_error([
                'error' => 'validation',
                'fields' => $missingFields
            ]);
        }

        $data['amount'] = (int)$data['amount'];
        $data['nonce'] = $postData['nonce'] ?? '';
        $data['paymentIntent'] = $postData['paymentIntent'] ?? null;
        $data['lastName'] = !empty($postData['lastName']) ? sanitize_text_field($postData['lastName']) : null;
        $data['currency'] = !empty($postData['currency']) ? sanitize_text_field($postData['currency']) : null;
        $data['liveMode'] = !empty($postData['liveMode']) ? $postData['liveMode'] : null;

        return PaymentIntentForm::fromArray($data);
    }

    public static function canAddFee(): bool
    {
        // Is the Stripe Pro add-on active?
        if (defined('GIVE_STRIPE_VERSION')) {
            return false;
        }

        if (!function_exists('get_plugins')) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        // Is the add-on installed but not active (lazy people...sheesh!)?
        $stripeInstalled = (bool)array_filter(
            get_plugins(),
            function ($plugin) {
                return 'Give - Stripe Gateway' === $plugin['Name'];
            }
        );

        // If so, give them the benefit of the doubt.
        if ($stripeInstalled) {
            return false;
        }

        // Is there an active license for Stripe?
        if (class_exists(Give_License::class) && Give_License::get_license_by_plugin_dirname('give-stripe')) {
            return false;
        }

        // No license, no Stripe add-on (active or installed). Add the fee.
        return true;
    }

}
