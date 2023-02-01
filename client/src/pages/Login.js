import { withSEO } from "../components/Seo/withSEO";
import ComingSoon from "../components/widgets/ComingSoon";

const Login = () => {
    return <ComingSoon/>
  };
  const seo = {
    title: "Login ",
    description:"Login description",
    keywords:"Login keywords",
  };
  
  export default withSEO(Login,seo);
  