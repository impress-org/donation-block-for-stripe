import {Modal, Button, Icon} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import {useRef, useState} from '@wordpress/element';
import axios from 'axios';

const alertIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.22044 1.75358C8.12626 1.57738 7.87365 1.57738 7.77947 1.75359L1.69783 13.1321C1.60882 13.2987 1.72949 13.5 1.91831 13.5H14.0816C14.2705 13.5 14.3911 13.2987 14.3021 13.1321L8.22044 1.75358ZM6.45658 1.04652C7.11584 -0.186933 8.88408 -0.186935 9.54334 1.04652L15.625 12.4251C16.2481 13.5908 15.4034 15 14.0816 15H1.91831C0.596516 15 -0.248131 13.5908 0.374936 12.4251L6.45658 1.04652ZM8.99996 11C8.99996 11.5523 8.55225 12 7.99996 12C7.44768 12 6.99996 11.5523 6.99996 11C6.99996 10.4477 7.44768 10 7.99996 10C8.55225 10 8.99996 10.4477 8.99996 11ZM8.74996 5.75C8.74996 5.33579 8.41417 5 7.99996 5C7.58575 5 7.24996 5.33579 7.24996 5.75V8.25C7.24996 8.66421 7.58575 9 7.99996 9C8.41417 9 8.74996 8.66421 8.74996 8.25V5.75Z"
            fill="#9A6700"
        />
    </svg>
);

export default function StripeDisconnectModal({onRequestClose, onDisconnect}) {
    const inputRef = useRef();
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const input = inputRef.current.value.toLowerCase();

        if (input !== 'disconnect') {
            setError(__('Please enter "DISCONNECT" to confirm.', 'donation-block-for-stripe'));
            inputRef.current.focus();
            return;
        }

        axios
            .post('/?dfb_donation-block-stripe-action=disconnectFromStripe')
            .then(() => {
                onDisconnect();
                onRequestClose();
            })
            .catch(() => {
                setError(__('An error occurred while disconnecting from Stripe.', 'donation-block-for-stripe'));
            });
    };

    return (
        <Modal
            onRequestClose={onRequestClose}
            title={__('Confirm Stripe Disconnect', 'donation-form-block')}
            icon={<Icon icon={() => alertIcon} />}
            className="dfb-stripe-disconnect-modal"
        >
            <form onSubmit={handleSubmit} className="dfb-stripe-disconnect-modal__form">
                {error && <p className="dfb-stripe-disconnect-modal__error">{error}</p>}
                <p>
                    {__(
                        'Removing the connection between Stripe and your website will cause all donation forms to not accept any form of payment. If you’re OK with this, please type DISCONNECT below to confirm.',
                        'donation-form-block'
                    )}
                </p>
                <input type="text" placeholder="Type DISCONNECT here..." ref={inputRef} required />
                <div className="dfb-stripe-disconnect-modal__buttons">
                    <input
                        type="submit"
                        value={__('Disconnect', 'donation-form-block')}
                        className="components-button is-secondary"
                    />
                    <Button variant="primary" onClick={onRequestClose}>
                        Cancel
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
