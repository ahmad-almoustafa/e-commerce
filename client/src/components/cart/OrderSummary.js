import { Link } from "react-router-dom";
const OrderSummary = ({cartCount, total}) => {
  return (
    <>
    <div className=" bg-zinc-200 w-1/4 px-8 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase"> {cartCount} Items</span>
        <span className="font-semibold text-sm">${total}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">
          Shipping
        </label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>Standard shipping - $10.00</option>
        </select>
      </div>
      <div className="py-10">
        <label
          htmlFor="promo"
          className="font-semibold inline-block mb-3 text-sm uppercase"
        >
          Promo Code
        </label>
        <input
          type="text"
          id="promo"
          placeholder="Enter your code"
          className="p-2 text-sm w-full"
        />
      </div>
      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
        Apply
      </button>
      <div className="border-t mt-8">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>${total}</span>
        </div>
        <Link to="/payment">
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
          Pay
        </button>
        </Link>
     
  
      </div>
      
    </div>
   
    </>
  );
};
export default OrderSummary;
