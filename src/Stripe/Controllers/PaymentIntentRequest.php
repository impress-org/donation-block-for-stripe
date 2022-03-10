<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\Controllers;

use GiveDonationBlock\Stripe\DataTransferObjects\PaymentIntentForm;
use GiveDonationBlock\Stripe\DataTransferObjects\StripeData;
use GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException;
use GiveDonationBlock\Strauss\Stripe\StripeClient;

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

        if ($data->liveMode) {
            $secretKey = $stripeData->liveSecretKey;
        } else {
            $secretKey = $stripeData->testSecretKey;
        }

        try {

            $paymentIntent = wp_remote_post(
                'https://api.stripe.com/v1/payment_intents',
                [
                    'headers' => ['Authorization' => 'Bearer ' . $secretKey],
                    'body' => [
                        'amount' => $data->amount,
                        'currency' => 'USD',
                        'receipt_email' => $data->email,
                        'application_fee_amount' => ceil($data->amount * 0.02),
                        'automatic_payment_methods' => [
                            'enabled' => 'true',
                        ],
                    ]
                ]
            );

            $apiBody     = json_decode( wp_remote_retrieve_body( $paymentIntent ) );

            wp_send_json_success([
                'clientSecret' => $apiBody->client_secret,
            ]);

        } catch (ApiErrorException $e) {
            wp_send_json_error([
                'error' => 'stripe_error',
                'message' => 'There was an error setting up your donation. Please contact the site owner.',
            ]);
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
        $data['lastName'] = !empty($postData['lastName']) ? sanitize_text_field($postData['lastName']) : null;
        $data['liveMode'] = !empty($postData['liveMode']) ? $postData['liveMode'] : null;

        return PaymentIntentForm::fromArray($data);
    }
}
