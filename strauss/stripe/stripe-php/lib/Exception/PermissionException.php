<?php
/**
 * @license MIT
 *
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace GiveDonationBlock\Strauss\Stripe\Exception;

/**
 * PermissionException is thrown in cases where access was attempted on a
 * resource that wasn't allowed.
 */
class PermissionException extends ApiErrorException
{
}
