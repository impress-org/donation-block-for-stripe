<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Issuing;

/**
 * An Issuing <code>Cardholder</code> object represents an individual or business
 * entity who is <a href="https://stripe.com/docs/issuing">issued</a> cards.
 *
 * Related guide: <a
 * href="https://stripe.com/docs/issuing/cards#create-cardholder">How to create a
 * Cardholder</a>
 *
 * @property string $id Unique identifier for the object.
 * @property string $object String representing the object's type. Objects of the same type share the same value.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $billing
 * @property null|\GiveDonationBlock\Strauss\Stripe\StripeObject $company Additional information about a <code>company</code> cardholder.
 * @property int $created Time at which the object was created. Measured in seconds since the Unix epoch.
 * @property null|string $email The cardholder's email address.
 * @property null|\GiveDonationBlock\Strauss\Stripe\StripeObject $individual Additional information about an <code>individual</code> cardholder.
 * @property bool $livemode Has the value <code>true</code> if the object exists in live mode or the value <code>false</code> if the object exists in test mode.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $metadata Set of <a href="https://stripe.com/docs/api/metadata">key-value pairs</a> that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 * @property string $name The cardholder's name. This will be printed on cards issued to them.
 * @property null|string $phone_number The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the <a href="https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied">3D Secure documentation</a> for more details.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $requirements
 * @property null|\GiveDonationBlock\Strauss\Stripe\StripeObject $spending_controls Rules that control spending across this cardholder's cards. Refer to our <a href="https://stripe.com/docs/issuing/controls/spending-controls">documentation</a> for more details.
 * @property string $status Specifies whether to permit authorizations on this cardholder's cards.
 * @property string $type One of <code>individual</code> or <code>company</code>.
 *
 * @license MIT
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */
class Cardholder extends \GiveDonationBlock\Strauss\Stripe\ApiResource
{
    const OBJECT_NAME = 'issuing.cardholder';

    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\All;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Create;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Retrieve;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Update;
}
