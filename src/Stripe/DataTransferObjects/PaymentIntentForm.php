<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\DataTransferObjects;

class PaymentIntentForm
{
    /**
     * @var string
     */
    public string $firstName;

    /**
     * @var string|null
     */
    public ?string $lastName;

    /**
     * @var string
     */
    public string $email;

    /**
     * @var int
     */
    public int $amount;

    /**
     * @var bool
     */
    public bool $liveMode;

    /**
     * @var string
     */
    public string $nonce;

    public static function fromArray(array $data): self
    {
        $object = new self();
        $object->firstName = $data['firstName'];
        $object->lastName = $data['lastName'];
        $object->email = $data['email'];
        $object->amount = $data['amount'];
        $object->liveMode = $data['liveMode'];
        $object->nonce = $data['nonce'];
        return $object;
    }
}
