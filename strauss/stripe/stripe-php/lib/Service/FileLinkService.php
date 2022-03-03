<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Service;

class FileLinkService extends \GiveDonationBlock\Strauss\Stripe\Service\AbstractService
{
    /**
     * Returns a list of file links.
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
        return $this->requestCollection('get', '/v1/file_links', $params, $opts);
    }

    /**
     * Creates a new file link object.
     *
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\FileLink
     */
    public function create($params = null, $opts = null)
    {
        return $this->request('post', '/v1/file_links', $params, $opts);
    }

    /**
     * Retrieves the file link with the given ID.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\FileLink
     */
    public function retrieve($id, $params = null, $opts = null)
    {
        return $this->request('get', $this->buildPath('/v1/file_links/%s', $id), $params, $opts);
    }

    /**
     * Updates an existing file link object. Expired links can no longer be updated.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\FileLink
     */
    public function update($id, $params = null, $opts = null)
    {
        return $this->request('post', $this->buildPath('/v1/file_links/%s', $id), $params, $opts);
    }
}
