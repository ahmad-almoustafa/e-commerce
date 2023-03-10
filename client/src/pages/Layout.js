import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

const Layout = () => {
  return (
    <>
      <div>
        <div className="flex flex-wrap  h-screen">
          <section className="relative mx-auto">
            <Nav />
            {/* 
              Outlet new feature of React Router v6
              The <Outlet> element is used as a placeholder.
              In this case an <Outlet> enables the Layout component to render its child routes.
              Thus the <Outlet> element will render either a <Blogs>, <Contact>,.. depending on the current location. */}
            <Outlet />
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
};
export default Layout;
