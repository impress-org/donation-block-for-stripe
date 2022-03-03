<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Terminal;

/**
 * A Location represents a grouping of readers.
 *
 * Related guide: <a href="https://stripe.com/docs/terminal/fleet/locations">Fleet
 * Management</a>.
 *
 * @property string $id Unique identifier for the object.
 * @property string $object String representing the object's type. Objects of the same type share the same value.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $address
 * @property string $display_name The display name of the location.
 * @property bool $livemode Has the value <code>true</code> if the object exists in live mode or the value <code>false</code> if the object exists in test mode.
 * @property \GiveDonationBlock\Strauss\Stripe\StripeObject $metadata Set of <a href="https://stripe.com/docs/api/metadata">key-value pairs</a> that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 *
 * @license MIT
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */
class Location extends \GiveDonationBlock\Strauss\Stripe\ApiResource
{
    const OBJECT_NAME = 'terminal.location';

    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\All;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Create;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Delete;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Retrieve;
    use \GiveDonationBlock\Strauss\Stripe\ApiOperations\Update;
}
