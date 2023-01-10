import { useEffect, useState } from "react";

import { loadStripe } from "@stripe/stripe-js";
import {Elements,useStripe } from '@stripe/react-stripe-js';
import { useSelector } from "react-redux";

import PaymentForm from "./PaymentForm"
const Payment = () => {

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    return (
      <div>

        <Elements stripe={stripePromise} >
            <PaymentForm/>
        </Elements>
        </div>
    )
};

export default Payment;