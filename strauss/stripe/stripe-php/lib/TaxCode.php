<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe;

/**
 * <a href="https://stripe.com/docs/tax/tax-codes">Tax codes</a> classify goods and
 * services for tax purposes.
 *
 * @property string $id Unique identifier for the object.
 * @property string $object String representing the object's type. Objects of the same type share the same value.
 * @property string $description A detailed description of which types of products the tax code represents.
 * @property string $name A short name for the tax code.
 *
 * @license MIT
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */
class TaxCode extends ApiResource
{
    const OBJECT_NAME = 'tax_code';

    use ApiOperations\All;
    use ApiOperations\Retrieve;
}
