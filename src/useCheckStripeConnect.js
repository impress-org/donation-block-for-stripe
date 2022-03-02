import {useEffect, useState} from '@wordpress/element';
import axios from 'axios';

function checkStripeConnection() {
    return axios.post('/wp-admin/admin-ajax.php?action=dfb_stripe_connection');
}

export default function useCheckStripeConnect(recheck) {
    const [stripeConnected, setStripeConnected] = useState(null);
    const [hasChecked, setHasChecked] = useState(false);

    useEffect(() => {
        if (!hasChecked || typeof recheck === 'undefined' || recheck) {
            checkStripeConnection().then((response) => {
                setStripeConnected(response.data);
                setHasChecked(true);
            });
        }
    }, [recheck, hasChecked]);

    return stripeConnected;
}
