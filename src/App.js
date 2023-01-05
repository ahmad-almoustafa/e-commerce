import "./App.css";

import { BrowserRouter, Routes,Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* <Route index element={<Layout />}></Route> */}
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Route>
        <Route path="*" element={<NoPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
