import Products from "../components/product/Products";
import { withSEO } from "../components/Seo/withSEO";
const Shop = () => {
  return (
    <>
    
      <Products></Products>
    </>
  ); 
    
  };
  
  export default withSEO(Shop);
  