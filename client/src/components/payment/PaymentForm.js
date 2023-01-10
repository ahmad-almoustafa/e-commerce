import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();


  return (
    <form >
      <CardElement/>
      <button disabled={!stripe} className="w-full mt-5 p-2 bg-black text-white rounded-md ">Pay</button>
    </form>
  )
};

export default PaymentForm;