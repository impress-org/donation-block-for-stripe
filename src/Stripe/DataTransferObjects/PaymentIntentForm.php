<?php

declare(strict_types=1);

namespace GiveDonationBlock\Stripe\DataTransferObjects;

class PaymentIntentForm
{
    /**
     * @var string
     */
    public $firstName;

    /**
     * @var string|null
     */
    public $lastName;

    /**
     * @var string
     */
    public $email;

    /**
     * @var int
     */
    public $amount;

    public static function fromArray(array $data): self
    {
        $object = new self();
        $object->firstName = $data['firstName'];
        $object->lastName = $data['lastName'];
        $object->email = $data['email'];
        $object->amount = $data['amount'];
        return $object;
    }
}
