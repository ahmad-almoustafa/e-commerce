import { useSelector } from "react-redux";
import CartItems from "./../components/cart/CartItems";
import OrderSummary from "./../components/cart/OrderSummary";
import { selectCartItems, selectTotal,selectCartCount } from "../features/cart/selector";

const Shop = () => {
  //use Selector to get data from Redux state store
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);
  const cartCount = useSelector(selectCartCount);
  console.log("cartItems", cartItems);
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <CartItems cartItems={cartItems} cartCount={cartCount}  total={total}></CartItems>
          <OrderSummary cartCount={cartCount} total={total} />
        </div>
      </div>
    </>
  );
};
export default Shop;
