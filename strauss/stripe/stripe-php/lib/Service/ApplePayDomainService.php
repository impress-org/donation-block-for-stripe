<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Service;

class ApplePayDomainService extends \GiveDonationBlock\Strauss\Stripe\Service\AbstractService
{
    /**
     * List apple pay domains.
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
        return $this->requestCollection('get', '/v1/apple_pay/domains', $params, $opts);
    }

    /**
     * Create an apple pay domain.
     *
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\ApplePayDomain
     */
    public function create($params = null, $opts = null)
    {
        return $this->request('post', '/v1/apple_pay/domains', $params, $opts);
    }

    /**
     * Delete an apple pay domain.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\ApplePayDomain
     */
    public function delete($id, $params = null, $opts = null)
    {
        return $this->request('delete', $this->buildPath('/v1/apple_pay/domains/%s', $id), $params, $opts);
    }

    /**
     * Retrieve an apple pay domain.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\ApplePayDomain
     */
    public function retrieve($id, $params = null, $opts = null)
    {
        return $this->request('get', $this->buildPath('/v1/apple_pay/domains/%s', $id), $params, $opts);
    }
}
