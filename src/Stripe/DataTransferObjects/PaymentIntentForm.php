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

    /**
     * @var string
     */
    public $currency;

    /**
     * @var string|null
     */
    public $paymentIntent;

    /**
     * @var string
     */
    public $liveMode;

    /**
     * @var string
     */
    public $nonce;

    public static function fromArray(array $data): self
    {
        $object = new self();
        $object->firstName = $data['firstName'];
        $object->lastName = $data['lastName'];
        $object->email = $data['email'];
        $object->amount = $data['amount'];
        $object->currency = $data['currency'];
        $object->paymentIntent = $data['paymentIntent'];
        $object->liveMode = $data['liveMode'];
        $object->nonce = $data['nonce'];
        return $object;
    }
}
