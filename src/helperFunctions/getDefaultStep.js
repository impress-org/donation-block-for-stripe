export default function getDefaultStep(donationFormId) {
    const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
    if (!clientSecret) {
        return 1;
    }

    const formId = new URLSearchParams(window.location.search).get('form_id');
    if (formId !== donationFormId) {
        return 1;
    }

    return 3;
}
