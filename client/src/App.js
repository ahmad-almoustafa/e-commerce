import "./App.css";

import { BrowserRouter, Routes,Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Payment from "./pages/Payment";
import Checkout from "./pages/Checkout";
import OrderCompleted from "./pages/OrderCompleted";
function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Shop />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/completion" element={<OrderCompleted />}></Route>
        </Route>
        <Route path="*" element={<NoPage />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
