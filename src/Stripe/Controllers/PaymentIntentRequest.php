<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\Controllers;

use GiveDonationBlock\Stripe\DataTransferObjects\PaymentIntentForm;
use GiveDonationBlock\Stripe\DataTransferObjects\StripeData;
use Stripe\Exception\ApiErrorException;
use Stripe\StripeClient;

use function sanitize_text_field;
use function wp_send_json_error;

class PaymentIntentRequest
{
    public function __invoke()
    {
        $stripeData = StripeData::fromOption();

        if ($stripeData === null) {
            wp_send_json_error([
                'error' => 'stripe_not_connected',
                'message' => 'Stripe is not connected. Please notify site owner to connect.',
            ]);
        }

        $data = $this->getValidatedData();

        $stripeClient = new StripeClient($stripeData->testSecretKey);

        try {
            $paymentIntent = $stripeClient->paymentIntents->create([
                'amount' => $data->amount,
                'currency' => 'USD',
                'receipt_email' => $data->email,
                'application_fee_amount' => ceil($data->amount * 0.02),
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            wp_send_json_success([
                'clientSecret' => $paymentIntent->client_secret,
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

        foreach($requiredFields as $field => $label) {
            if(empty($postData[$field])) {
                $missingFields[] = [
                    'field' => $field,
                    'message' => "$label is required."
                ];
            } else {
                $data[$field] = sanitize_text_field($postData[$field]);
            }
        }

        if ( !empty($missingFields)) {
            wp_send_json_error([
                'error' => 'validation',
                'fields' => $missingFields
            ]);
        }

        $data['amount'] = (int) $data['amount'];
        $data['lastName'] = !empty($postData['lastName']) ? sanitize_text_field($postData['lastName']) : null;

        return PaymentIntentForm::fromArray($data);
    }
}
