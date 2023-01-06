import { Link } from "react-router-dom";
import CartDropdownItem from "./CartDropdownItem";
import { useSelector } from "react-redux";
import { selectCartItems } from "./../../features/cart/selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="absolute mt-2 top-12 right-2  w-1/5 bg-white px-10 py-10">
      <div className=" w-full text-black ">
        {Object.values(cartItems).map((item) => {
          return <CartDropdownItem item={item}></CartDropdownItem>;
        })}
      </div>

      <Link to="/checkout" className=" w-4/5 ">
        <div className="border-t mt-1">
          <button className=" w-full bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
            Checkout
          </button>
        </div>
      </Link>
    </div>
  );
};

export default CartDropdown;
