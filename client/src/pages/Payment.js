import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../components/payment/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotal, selectTotal } from "../features/cart/selector";
import axios from "axios";
import { withSEO } from "../components/Seo/withSEO";
import { selectPaymentStripe } from "../features/payment/selectors";
import { setClientSecret, setPublishableKey } from "../features/payment/paymentSlice";


function Payment() {
  const dispatch = useDispatch();
  const total = useSelector(selectTotal);
  const stripe = useSelector(selectPaymentStripe);
  
   const [stripePromise, setStripePromise] = useState(null);


  useEffect(() => {
    axios.get("/api/config").then(async (r) => {
      const { publishableKey } = r.data;
      //In Redux,the payload must be a plain JavaScript object, and not a promise or any other non-serializable value.
      //store the publishableKey in the state instead of loadStripe(publishableKey) promise
      dispatch(setPublishableKey(publishableKey));
      const stripePromise = await loadStripe(publishableKey);
      // dispatch(setStripePromise(stripePromise));
       setStripePromise(stripePromise);
    });
  }, [dispatch]);
  //pass the amount to the server
  useEffect(() => {
    axios.post(
      `/api/create-payment-intent`, 
      {total}//Axios automatically serializes JavaScript objects into JSON,
    ).then( (result) => {
      var { clientSecret } =  result.data;
      dispatch(setClientSecret(clientSecret));

    });
  }, [dispatch,total]);
  

  return (
    <>
      <div className=" flex flex-col p-8">
        <div className="  m-auto w-3/5 place-items-center ">
          <h1 className="text-center font-bold p-3">Pay with Stripe </h1>   

          {stripe.clientSecret && stripePromise && (
     
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret: stripe.clientSecret,
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

export default withSEO (Payment, {title:'Payment'});
