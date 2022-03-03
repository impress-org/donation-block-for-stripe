<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Service\Checkout;

class SessionService extends \GiveDonationBlock\Strauss\Stripe\Service\AbstractService
{
    /**
     * Returns a list of Checkout Sessions.
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
        return $this->requestCollection('get', '/v1/checkout/sessions', $params, $opts);
    }

    /**
     * When retrieving a Checkout Session, there is an includable
     * <strong>line_items</strong> property containing the first handful of those
     * items. There is also a URL where you can retrieve the full (paginated) list of
     * line items.
     *
     * @param string $parentId
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\Collection
     */
    public function allLineItems($parentId, $params = null, $opts = null)
    {
        return $this->requestCollection('get', $this->buildPath('/v1/checkout/sessions/%s/line_items', $parentId), $params, $opts);
    }

    /**
     * Creates a Session object.
     *
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\Checkout\Session
     */
    public function create($params = null, $opts = null)
    {
        return $this->request('post', '/v1/checkout/sessions', $params, $opts);
    }

    /**
     * A Session can be expired when it is in one of these statuses: <code>open</code>.
     *
     * After it expires, a customer can’t complete a Session and customers loading the
     * Session see a message saying the Session is expired.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\Checkout\Session
     */
    public function expire($id, $params = null, $opts = null)
    {
        return $this->request('post', $this->buildPath('/v1/checkout/sessions/%s/expire', $id), $params, $opts);
    }

    /**
     * Retrieves a Session object.
     *
     * @param string $id
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\Checkout\Session
     */
    public function retrieve($id, $params = null, $opts = null)
    {
        return $this->request('get', $this->buildPath('/v1/checkout/sessions/%s', $id), $params, $opts);
    }
}
