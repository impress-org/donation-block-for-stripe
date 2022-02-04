<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\DataTransferObjects;

class StripeData
{
    public $liveAccessToken;
    public $livePublishableKey;
    public $testAccessToken;
    public $testPublishableKey;
    public $accountId;

    public function __construct(
        string $liveAccessToken,
        string $livePublishableKey,
        string $testAccessToken,
        string $testPublishableKey,
        string $accountId
    ) {
        $this->liveAccessToken = $liveAccessToken;
        $this->livePublishableKey = $livePublishableKey;
        $this->testAccessToken = $testAccessToken;
        $this->testPublishableKey = $testPublishableKey;
        $this->accountId = $accountId;
    }

    public static function fromArray(array $data): StripeData
    {
        return new self(
            $data['liveAccessToken'],
            $data['livePublishableKey'],
            $data['testAccessToken'],
            $data['testPublishableKey'],
            $data['accountId']
        );
    }
}
