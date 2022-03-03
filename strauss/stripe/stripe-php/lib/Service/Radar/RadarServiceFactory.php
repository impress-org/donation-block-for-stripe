<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe\Service\Radar;

/**
 * Service factory class for API resources in the Radar namespace.
 *
 * @property EarlyFraudWarningService $earlyFraudWarnings
 * @property ValueListItemService $valueListItems
 * @property ValueListService $valueLists
 *
 * @license MIT
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */
class RadarServiceFactory extends \GiveDonationBlock\Strauss\Stripe\Service\AbstractServiceFactory
{
    /**
     * @var array<string, string>
     */
    private static $classMap = [
        'earlyFraudWarnings' => EarlyFraudWarningService::class,
        'valueListItems' => ValueListItemService::class,
        'valueLists' => ValueListService::class,
    ];

    protected function getServiceClass($name)
    {
        return \array_key_exists($name, self::$classMap) ? self::$classMap[$name] : null;
    }
}
