import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeMain from './StripeMain';

const stripePromise = loadStripe(
    'pk_test_51FwspPG6np2P9MdlkRpx67fsoPwmTvpDrMOldn8PwnvfqW65hoesQV4FyWcJl5psyFLM8EBe4qZVK0fFArRNau5N001XmfvQ3p',
);
function StripeParent({ totalDonation }: any) {
    return (
        <Elements stripe={stripePromise}>
            <StripeMain handleDonation={totalDonation} />
        </Elements>
    );
}

export default StripeParent;
