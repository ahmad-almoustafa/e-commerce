import { withSEO } from "../components/Seo/withSEO";

const NoPage = () => {
    return <h1> 404 No Page</h1>;
  };

  export default withSEO(NoPage, {title : '404'});
  