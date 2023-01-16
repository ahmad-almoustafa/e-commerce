import { withSEO } from "../components/Seo/withSEO";

const Login = () => {
    return <h1> Login Page</h1>;
  };
  const seo = {
    title: "Login ",
    description:"Login description",
    keywords:"Login keywords",
  };
  
  export default withSEO(Login,seo);
  