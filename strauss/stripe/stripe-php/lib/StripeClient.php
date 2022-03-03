<?php

// File generated from our OpenAPI spec

namespace GiveDonationBlock\Strauss\Stripe;

/**
 * Client used to send requests to Stripe's API.
 *
 * @property \GiveDonationBlock\Strauss\Stripe\Service\AccountLinkService $accountLinks
 * @property \GiveDonationBlock\Strauss\Stripe\Service\AccountService $accounts
 * @property \GiveDonationBlock\Strauss\Stripe\Service\ApplePayDomainService $applePayDomains
 * @property \GiveDonationBlock\Strauss\Stripe\Service\ApplicationFeeService $applicationFees
 * @property \GiveDonationBlock\Strauss\Stripe\Service\BalanceService $balance
 * @property \GiveDonationBlock\Strauss\Stripe\Service\BalanceTransactionService $balanceTransactions
 * @property \GiveDonationBlock\Strauss\Stripe\Service\BillingPortal\BillingPortalServiceFactory $billingPortal
 * @property \GiveDonationBlock\Strauss\Stripe\Service\ChargeService $charges
 * @property \GiveDonationBlock\Strauss\Stripe\Service\Checkout\CheckoutServiceFactory $checkout
 * @property \GiveDonationBlock\Strauss\Stripe\Service\CountrySpecService $countrySpecs
 * @property \GiveDonationBlock\Strauss\Stripe\Service\CouponService $coupons
 * @property \GiveDonationBlock\Strauss\Stripe\Service\CreditNoteService $creditNotes
 * @property \GiveDonationBlock\Strauss\Stripe\Service\CustomerService $customers
 * @property \GiveDonationBlock\Strauss\Stripe\Service\DisputeService $disputes
 * @property \GiveDonationBlock\Strauss\Stripe\Service\EphemeralKeyService $ephemeralKeys
 * @property \GiveDonationBlock\Strauss\Stripe\Service\EventService $events
 * @property \GiveDonationBlock\Strauss\Stripe\Service\ExchangeRateService $exchangeRates
 * @property \GiveDonationBlock\Strauss\Stripe\Service\FileLinkService $fileLinks
 * @property \GiveDonationBlock\Strauss\Stripe\Service\FileService $files
 * @property \GiveDonationBlock\Strauss\Stripe\Service\Identity\IdentityServiceFactory $identity
 * @property \GiveDonationBlock\Strauss\Stripe\Service\InvoiceItemService $invoiceItems
 * @property \GiveDonationBlock\Strauss\Stripe\Service\InvoiceService $invoices
 * @property \GiveDonationBlock\Strauss\Stripe\Service\Issuing\IssuingServiceFactory $issuing
 * @property \GiveDonationBlock\Strauss\Stripe\Service\MandateService $mandates
 * @property \GiveDonationBlock\Strauss\Stripe\Service\OAuthService $oauth
 * @property \GiveDonationBlock\Strauss\Stripe\Service\OrderReturnService $orderReturns
 * @property \GiveDonationBlock\Strauss\Stripe\Service\OrderService $orders
 * @property \GiveDonationBlock\Strauss\Stripe\Service\PaymentIntentService $paymentIntents
 * @property \GiveDonationBlock\Strauss\Stripe\Service\PaymentLinkService $paymentLinks
 * @property \GiveDonationBlock\Strauss\Stripe\Service\PaymentMethodService $paymentMethods
 * @property \GiveDonationBlock\Strauss\Stripe\Service\PayoutService $payouts
 * @property \GiveDonationBlock\Strauss\Stripe\Service\PlanService $plans
 * @property \GiveDonationBlock\Strauss\Stripe\Service\PriceService $prices
 * @property \GiveDonationBlock\Strauss\Stripe\Service\ProductService $products
 * @property \GiveDonationBlock\Strauss\Stripe\Service\PromotionCodeService $promotionCodes
 * @property \GiveDonationBlock\Strauss\Stripe\Service\QuoteService $quotes
 * @property \GiveDonationBlock\Strauss\Stripe\Service\Radar\RadarServiceFactory $radar
 * @property \GiveDonationBlock\Strauss\Stripe\Service\RefundService $refunds
 * @property \GiveDonationBlock\Strauss\Stripe\Service\Reporting\ReportingServiceFactory $reporting
 * @property \GiveDonationBlock\Strauss\Stripe\Service\ReviewService $reviews
 * @property \GiveDonationBlock\Strauss\Stripe\Service\SetupAttemptService $setupAttempts
 * @property \GiveDonationBlock\Strauss\Stripe\Service\SetupIntentService $setupIntents
 * @property \GiveDonationBlock\Strauss\Stripe\Service\ShippingRateService $shippingRates
 * @property \GiveDonationBlock\Strauss\Stripe\Service\Sigma\SigmaServiceFactory $sigma
 * @property \GiveDonationBlock\Strauss\Stripe\Service\SkuService $skus
 * @property \GiveDonationBlock\Strauss\Stripe\Service\SourceService $sources
 * @property \GiveDonationBlock\Strauss\Stripe\Service\SubscriptionItemService $subscriptionItems
 * @property \GiveDonationBlock\Strauss\Stripe\Service\SubscriptionScheduleService $subscriptionSchedules
 * @property \GiveDonationBlock\Strauss\Stripe\Service\SubscriptionService $subscriptions
 * @property \GiveDonationBlock\Strauss\Stripe\Service\TaxCodeService $taxCodes
 * @property \GiveDonationBlock\Strauss\Stripe\Service\TaxRateService $taxRates
 * @property \GiveDonationBlock\Strauss\Stripe\Service\Terminal\TerminalServiceFactory $terminal
 * @property \GiveDonationBlock\Strauss\Stripe\Service\TokenService $tokens
 * @property \GiveDonationBlock\Strauss\Stripe\Service\TopupService $topups
 * @property \GiveDonationBlock\Strauss\Stripe\Service\TransferService $transfers
 * @property \GiveDonationBlock\Strauss\Stripe\Service\WebhookEndpointService $webhookEndpoints
 *
 * @license MIT
 * Modified by Jason Adams on 03-March-2022 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */
class StripeClient extends BaseStripeClient
{
    /**
     * @var \GiveDonationBlock\Strauss\Stripe\Service\CoreServiceFactory
     */
    private $coreServiceFactory;

    public function __get($name)
    {
        if (null === $this->coreServiceFactory) {
            $this->coreServiceFactory = new \GiveDonationBlock\Strauss\Stripe\Service\CoreServiceFactory($this);
        }

        return $this->coreServiceFactory->__get($name);
    }
}
