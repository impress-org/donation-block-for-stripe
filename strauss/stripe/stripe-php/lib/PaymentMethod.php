<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe;

/**
 * PaymentMethod objects represent your customer's payment instruments. They can be
 * used with <a
 * href="https://stripe.com/docs/payments/payment-intents">PaymentIntents</a> to
 * collect payments or saved to Customer objects to store instrument details for
 * future payments.
 *
 * Related guides: <a
 * href="https://stripe.com/docs/payments/payment-methods">Payment Methods</a> and
 * <a href="https://stripe.com/docs/payments/more-payment-scenarios">More Payment
 * Scenarios</a>.
 *
 * @property string $id Unique identifier for the object.
 * @property string $object String representing the object's type. Objects of the same type share the same value.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $acss_debit
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $afterpay_clearpay
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $alipay
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $au_becs_debit
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $bacs_debit
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $bancontact
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $billing_details
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $boleto
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $card
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $card_present
 * @property int $created Time at which the object was created. Measured in seconds since the Unix epoch.
 * @property null|string|\GiveDonationBlock\Strauss\Stripe\Customer $customer The ID of the Customer to which this PaymentMethod is saved. This will not be set when the PaymentMethod has not been saved to a Customer.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $eps
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $fpx
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $giropay
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $grabpay
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $ideal
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $interac_present
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $klarna
 * @property bool $livemode Has the value <code>true</code> if the object exists in live mode or the value <code>false</code> if the object exists in test mode.
 * @property null|\GiveDonationBlock\Strauss\Stripe\StripeObject $metadata Set of <a href="https://stripe.com/docs/api/metadata">key-value pairs</a> that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $oxxo
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $p24
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $sepa_debit
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $sofort
 * @property string $type The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $wechat_pay
 *
 * @license MIT
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */
class PaymentMethod extends ApiResource
{
    const OBJECT_NAME = 'payment_method';

    use ApiOperations\All;
    use ApiOperations\Create;
    use ApiOperations\Retrieve;
    use ApiOperations\Update;

    /**
     * @param null|array $params
     * @param null|array|string $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\PaymentMethod the attached payment method
     */
    public function attach($params = null, $opts = null)
    {
        $url = $this->instanceUrl() . '/attach';
        list($response, $opts) = $this->_request('post', $url, $params, $opts);
        $this->refreshFrom($response, $opts);

        return $this;
    }

    /**
     * @param null|array $params
     * @param null|array|string $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\PaymentMethod the detached payment method
     */
    public function detach($params = null, $opts = null)
    {
        $url = $this->instanceUrl() . '/detach';
        list($response, $opts) = $this->_request('post', $url, $params, $opts);
        $this->refreshFrom($response, $opts);

        return $this;
    }
}
