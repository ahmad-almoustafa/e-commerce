import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";
import { selectProduct } from "../../features/product/selector";
import {
  fetchAsyncProducts,
  setCurrentPage,
} from "../../features/product/productSlice";
import Pagination from "./Pagination";
import { CircleLoader } from "react-spinners";

const Products = () => {
  //fetch products from api using thunk
  const dispatch = useDispatch();
  //product obj {loading, products, error,currentPage,productsPerPage }
  const product = useSelector(selectProduct);
  const { currentPage, productsPerPage } = product;

  //const product= useSelector((state)=>state.product);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);
  
  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

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
            <ProductList products={currentProducts}></ProductList>
          ) : null}
          <div></div>
        </div>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={product.products.length}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Products;
