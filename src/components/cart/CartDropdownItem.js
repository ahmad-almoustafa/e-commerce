import { Link } from "react-router-dom";

const CartDropdownItem = ({ item }) => {
  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-4 py-5">
      <div className="flex w-3/5">
        <div className="w-32">
          <img className="h-24" src={item.product.thumbnail} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{item.product.title}</span>
          <Link
            to="#"
            className="font-semibold hover:text-red-500 text-gray-500 text-xs"
          >
            Remove
          </Link>
        </div>
      </div>
      <span className="text-center w-2/5 font-semibold text-sm">
        {item.qty} X ${item.product.price}
      </span>
    </div>
  );
};

export default CartDropdownItem;
