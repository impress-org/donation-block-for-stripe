import {useEffect, useState} from "@wordpress/element";
import axios from "axios";

function checkStripeConnection()  {
    return axios.post('/wp-admin/admin-ajax.php?action=dfb_stripe_connection');
}

export default function useCheckStripeConnect() {

    const [stripeConnected, setStripeConnected] = useState(null);

    useEffect(() => {
        checkStripeConnection().then(response => {
            setStripeConnected(response.data);
        });
    }, []);

    return stripeConnected;

}
