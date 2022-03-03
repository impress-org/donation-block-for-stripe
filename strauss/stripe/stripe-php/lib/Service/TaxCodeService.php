<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Service;

class TaxCodeService extends \GiveDonationBlock\Strauss\Stripe\Service\AbstractService
{
    /**
     * A list of <a href="https://stripe.com/docs/tax/tax-codes">all tax codes
     * available</a> to add to Products in order to allow specific tax calculations.
     *
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\Collection
     *
     * @license MIT
     * Modified by Jason Adams on 03-March-2022 using Strauss.
     * @see https://github.com/BrianHenryIE/strauss
     */
    public function all($params = null, $opts = null)
    {
        return $this->requestCollection('get', '/v1/tax_codes', $params, $opts);
    }

    /**
     * Retrieves the details of an existing tax code. Supply the unique tax code ID and
     * Stripe will return the corresponding tax code information.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\TaxCode
     */
    public function retrieve($id, $params = null, $opts = null)
    {
        return $this->request('get', $this->buildPath('/v1/tax_codes/%s', $id), $params, $opts);
    }
}
