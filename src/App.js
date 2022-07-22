import React, { useEffect, useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

const localStorageProducts = JSON.parse(localStorage.getItem("cart")) || [];

function App() {
  const [cart, setCart] = useState(localStorageProducts);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Cart cart={cart} setCart={setCart} />
        <Products cart={cart} setCart={setCart} />
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
