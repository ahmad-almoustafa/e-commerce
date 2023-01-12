import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";
import { selectProduct } from "../../features/product/selector";
import { fetchAsyncProducts } from "../../features/product/productSlice";
import { CircleLoader } from "react-spinners";

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
          {product.loading && (
            <div className="w-full flex justify-center items-center h-96	">
              <CircleLoader
                size={50}
                color={"#123abc"}
                loading={product.loading}
              />
            </div>
          )}
          {!product.loading && product.error ? (
            <div>Error: {product.error}</div>
          ) : null}
          {!product.loading && product.products.length ? (
            <ProductList products={product.products}></ProductList>
          ) : null}
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
