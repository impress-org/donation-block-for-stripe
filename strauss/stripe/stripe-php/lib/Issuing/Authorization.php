<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Issuing;

/**
 * When an <a href="https://stripe.com/docs/issuing">issued card</a> is used to
 * make a purchase, an Issuing <code>Authorization</code> object is created. <a
 * href="https://stripe.com/docs/issuing/purchases/authorizations">Authorizations</a>
 * must be approved for the purchase to be completed successfully.
 *
 * Related guide: <a
 * href="https://stripe.com/docs/issuing/purchases/authorizations">Issued Card
 * Authorizations</a>.
 *
 * @property string $id Unique identifier for the object.
 * @property string $object String representing the object's type. Objects of the same type share the same value.
 * @property int $amount The total amount that was authorized or rejected. This amount is in the card's currency and in the <a href="https://stripe.com/docs/currencies#zero-decimal">smallest currency unit</a>.
 * @property null|\GiveDonationBlock\Strauss\Stripe\StripeObject $amount_details Detailed breakdown of amount components. These amounts are denominated in <code>currency</code> and in the <a href="https://stripe.com/docs/currencies#zero-decimal">smallest currency unit</a>.
 * @property bool $approved Whether the authorization has been approved.
 * @property string $authorization_method How the card details were provided.
 * @property \GiveDonationBlock\Strauss\Stripe\BalanceTransaction[] $balance_transactions List of balance transactions associated with this authorization.
 * @property \GiveDonationBlock\Strauss\Stripe\Issuing\Card $card You can <a href="https://stripe.com/docs/issuing/cards">create physical or virtual cards</a> that are issued to cardholders.
 * @property null|string|\GiveDonationBlock\Strauss\Stripe\Issuing\Cardholder $cardholder The cardholder to whom this authorization belongs.
 * @property int $created Time at which the object was created. Measured in seconds since the Unix epoch.
 * @property string $currency Three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html">ISO currency code</a>, in lowercase. Must be a <a href="https://stripe.com/docs/currencies">supported currency</a>.
 * @property bool $livemode Has the value <code>true</code> if the object exists in live mode or the value <code>false</code> if the object exists in test mode.
 * @property int $merchant_amount The total amount that was authorized or rejected. This amount is in the <code>merchant_currency</code> and in the <a href="https://stripe.com/docs/currencies#zero-decimal">smallest currency unit</a>.
 * @property string $merchant_currency The currency that was presented to the cardholder for the authorization. Three-letter <a href="https://www.iso.org/iso-4217-currency-codes.html">ISO currency code</a>, in lowercase. Must be a <a href="https://stripe.com/docs/currencies">supported currency</a>.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $merchant_data
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $metadata Set of <a href="https://stripe.com/docs/api/metadata">key-value pairs</a> that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 * @property null|\GiveDonationBlock\Strauss\Stripe\StripeObject $pending_request The pending authorization request. This field will only be non-null during an <code>issuing_authorization.request</code> webhook.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject[] $request_history History of every time <code>pending_request</code> was approved/denied, either by you directly or by Stripe (e.g. based on your <code>spending_controls</code>). If the merchant changes the authorization by performing an <a href="https://stripe.com/docs/issuing/purchases/authorizations">incremental authorization</a>, you can look at this field to see the previous requests for the authorization.
 * @property string $status The current status of the authorization in its lifecycle.
 * @property \GiveDonationBlock\Strauss\Stripe\Issuing\Transaction[] $transactions List of <a href="https://stripe.com/docs/api/issuing/transactions">transactions</a> associated with this authorization.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $verification_data
 * @property null|string $wallet The digital wallet used for this authorization. One of <code>apple_pay</code>, <code>google_pay</code>, or <code>samsung_pay</code>.
 *
 * @license MIT
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */
class Authorization extends \GiveDonationBlock\Strauss\Stripe\ApiResource
{
    const OBJECT_NAME = 'issuing.authorization';

    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\All;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Retrieve;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Update;

    /**
     * @param null|array $params
     * @param null|array|string $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\Issuing\Authorization the approved authorization
     */
    public function approve($params = null, $opts = null)
    {
        $url = $this->instanceUrl() . '/approve';
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
     * @return \GiveDonationBlock\Strauss\Stripe\Issuing\Authorization the declined authorization
     */
    public function decline($params = null, $opts = null)
    {
        $url = $this->instanceUrl() . '/decline';
        list($response, $opts) = $this->_request('post', $url, $params, $opts);
        $this->refreshFrom($response, $opts);

        return $this;
    }
}
