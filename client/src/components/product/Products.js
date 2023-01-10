import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";
import { selectProduct } from "../../features/product/selector";
import { fetchAsyncProducts } from "../../features/product/productSlice";

const Products = () => {
  //fetch products from api using thunk
  const dispatch = useDispatch();
  //product obj {loading, products, error}
  const product = useSelector(selectProduct);
  //const product= useSelector((state)=>state.product);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid flex  grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductList product={product}></ProductList>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
