<?php
/**
 * @license MIT
 *
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace GiveDonationBlock\Strauss\Stripe\Exception\OAuth;

/**
 * InvalidGrantException is thrown when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */
class InvalidGrantException extends OAuthErrorException
{
}
