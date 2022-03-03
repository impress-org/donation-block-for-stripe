<?php
/**
 * @license MIT
 *
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace GiveDonationBlock\Strauss\Stripe\Exception\OAuth;

/**
 * UnsupportedGrantTypeException is thrown when an unuspported grant type
 * parameter is specified.
 */
class UnsupportedGrantTypeException extends OAuthErrorException
{
}
