// project-ui/app/components/Payment.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentIntent } = await stripe.createPayment({
            amount: 1000, // Amount in cents
            currency: 'usd',
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
            {error && <div>{error}</div>}
            {success && <div>Payment Successful!</div>}
        </form>
    );
};

const Payment = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Payment;