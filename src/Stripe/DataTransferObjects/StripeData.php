<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\DataTransferObjects;

class StripeData
{
    /**
     * @var string
     */
    public $liveSecretKey;

    /**
     * @var string
     */
    public $livePublishableKey;

    /**
     * @var string
     */
    public $testSecretKey;

    /**
     * @var string
     */
    public $testPublishableKey;

    /**
     * @var string
     */
    public $accountId;

    public function __construct(
        string $liveAccessToken,
        string $livePublishableKey,
        string $testAccessToken,
        string $testPublishableKey,
        string $accountId
    ) {
        $this->liveSecretKey = $liveAccessToken;
        $this->livePublishableKey = $livePublishableKey;
        $this->testSecretKey = $testAccessToken;
        $this->testPublishableKey = $testPublishableKey;
        $this->accountId = $accountId;
    }

    public static function fromArray(array $data): StripeData
    {
        return new self(
            $data['liveSecretKey'],
            $data['livePublishableKey'],
            $data['testSecretKey'],
            $data['testPublishableKey'],
            $data['accountId']
        );
    }

    public static function fromOption(): ?self
    {
        $data = get_option('dfb_donation_block_stripe_data');

        return empty($data) ? null : self::fromArray([
            'liveSecretKey' => $data['stripeLiveSecretKey'],
            'livePublishableKey' => $data['stripeLivePublishableKey'],
            'testSecretKey' => $data['stripeTestSecretKey'],
            'testPublishableKey' => $data['stripeTestPublishableKey'],
            'accountId' => $data['stripeAccountId'],
        ]);
    }
}
