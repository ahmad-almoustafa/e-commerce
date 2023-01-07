import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, setItemQty } from "../../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
    
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        {/* product */}
        <div className="w-32">
          <img className="h-24" src={item.product.thumbnail} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{item.product.title}</span>
          <span className="text-indigo-500 text-xs">{item.product.brand}</span>
          <Link
            onClick={() => {
              dispatch(removeItem(item.product.id));
            }}
            className="font-semibold text-red-500 hover:text-rose-900 text-xs"
          >
            Remove
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button
          onClick={() => {
            dispatch(setItemQty({productID:item.product.id,qty: item.qty-1}));
          }}
        >
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
       
        <input
          className="mx-2 border text-center w-8"
          type="text"
          readOnly={true} 
          value={item.qty}
        />
        <button
          onClick={() => {
            dispatch(setItemQty({productID:item.product.id,qty: item.qty+1}));
          }}
        >
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${item.product.price}
      </span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${item.product.price * item.qty}
      </span>
    </div>
  );
};

export default CartItem;
