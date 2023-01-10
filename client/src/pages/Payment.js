import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/payment/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { selectTotal } from "../features/cart/selector";

function Payment() {
  const total = useSelector(selectTotal);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  //pass the amount to the server
  useEffect(() => {
    fetch(`/create-payment-intent`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        total,
      }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
      <div className=" flex flex-col p-8">
        <div className="  m-auto w-3/5 place-items-center ">
          <h1 className="text-center font-bold p-3">Pay with Stripe </h1>
          {clientSecret && stripePromise && (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <PaymentForm  total={total}/>
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}

export default Payment;
