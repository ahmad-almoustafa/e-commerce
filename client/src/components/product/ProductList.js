import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";

const ProductList = ({ products }) => {
  //dispatch actions to the Redux reducers
  const dispatch = useDispatch();
  // console.log("product:", products);

  return (
    <>
      <div className="mt-6 grid flex  grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => {
          return (
            <div key={product.id} className="flex flex-col">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <h3 className="text-sm text-gray-700 font-semibold ">
                  {product.title}
                </h3>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price}
                </p>
              </div>

              <div>
                <small
                  className="flex-1 mt-4 leading-5 text-gray-500 dark:text-gray-400"
                  x-text="post.description"
                >
                  {product.description}
                </small>
              </div>

              <div className="flex flex-wrap mt-auto space-x-2 justify-center">
                <button
                  onClick={() => dispatch(addItem(product))}
                  className="inline-block mt-4 px-12 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductList;
