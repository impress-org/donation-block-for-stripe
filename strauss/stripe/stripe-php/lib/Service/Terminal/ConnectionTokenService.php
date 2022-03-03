<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Service\Terminal;

class ConnectionTokenService extends \GiveDonationBlock\Strauss\Stripe\Service\AbstractService
{
    /**
     * To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived
     * connection token from Stripe, proxied through your server. On your backend, add
     * an endpoint that creates and returns a connection token.
     *
     * @param null|array $params
     * @param null|array|\GiveDonationBlock\Strauss\Stripe\Util\RequestOptions $opts
     *
     * @throws \GiveDonationBlock\Strauss\Stripe\Exception\ApiErrorException if the request fails
     *
     * @return \GiveDonationBlock\Strauss\Stripe\Terminal\ConnectionToken
     *
     * @license MIT
     * Modified by Jason Adams on 03-March-2022 using Strauss.
     * @see https://github.com/BrianHenryIE/strauss
     */
    public function create($params = null, $opts = null)
    {
        return $this->request('post', '/v1/terminal/connection_tokens', $params, $opts);
    }
}
