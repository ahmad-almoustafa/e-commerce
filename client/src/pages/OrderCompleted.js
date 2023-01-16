import { Link } from "react-router-dom";
import { withSEO } from "../components/Seo/withSEO";
import Alert from "../components/widgets/Alert";
const OrderCompleted = () => {
  const message="Your order has completed successfully. You'll receive an order confirmation shortly.";

  return (
    <div className=" flex flex-col p-8 ">
        <div className=" m-auto w-3/5 place-items-center ">
            <Alert color="green" title ="Order Completed" message={message}></Alert>

        
         <Link to="/shop"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
          </div>
      </div>
    );
};

export default withSEO(OrderCompleted, {title:'Success'});
