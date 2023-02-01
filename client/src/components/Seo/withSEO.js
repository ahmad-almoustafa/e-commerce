import { useCallback, useEffect } from "react";
import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import seoSlice,  { setSeo } from "../../features/seo/seoSlice";
import {selectSeo} from "../../features/seo/selectors";

//higher-order component (HOC)for seo
export const withSEO = (WrappedComponent, CompSEO=seoSlice.getInitialState()) => {
  return (props) => {
    const dispatch = useDispatch();
    //wrap with useCallback hook to prevent unnecessary re-renders
    //this function is now cached and won't get re created with each render
    const setSeoCallback = useCallback(()=>{
        //TODO: Fetch SEO data from the server
        //For now pass it as props
        dispatch(setSeo(CompSEO));
    },[dispatch])

    useEffect(() => {
       setSeoCallback()
    }, [setSeoCallback]);

    const seo = useSelector(selectSeo);
    return (   
      <>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
        </Helmet>
        <WrappedComponent {...props} />
      </>
    );
  };
};
