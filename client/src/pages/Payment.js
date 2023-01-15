import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/payment/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { selectTotal } from "../features/cart/selector";
import axios from "axios";
function Payment() {
  const total = useSelector(selectTotal);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios.get("/api/config").then( (r) => {
      const { publishableKey } = r.data;
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  //pass the amount to the server
  useEffect(() => {
    axios.post(
      `/api/create-payment-intent`, 
      {total}//Axios automatically serializes JavaScript objects into JSON,
    ).then( (result) => {
      var { clientSecret } =  result.data;
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

              <p className="text-gray-600 text-sm">Stripe Test Card: 4242424242424242</p>
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}

export default Payment;
