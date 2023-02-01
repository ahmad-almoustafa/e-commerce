import { useSelector } from "react-redux";
import CartItems from "./../components/cart/CartItems";
import OrderSummary from "./../components/cart/OrderSummary";
import { selectCartItems, selectTotal,selectCartCount, selectCartTotal } from "../features/cart/selector";
import { withSEO } from "../components/Seo/withSEO";


const Checkout = () => {
  //use Selector to get data from Redux state store
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <CartItems {...{ cartItems, cartCount, total }}></CartItems>
          <OrderSummary {...{cartCount,cartTotal,total}} />
        </div>
      </div>
    </>
  );
};

export default withSEO(Checkout,{title : 'Checkout'});
