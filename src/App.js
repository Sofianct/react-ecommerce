import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import DrawerContext from "./components/Context/DrawerContext";

const localStorageProducts = JSON.parse(localStorage.getItem("cart")) || [];

function App() {
  // const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(localStorageProducts);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <DrawerContext>
          <Header />
          <HomePage cart={cart} setCart={setCart} />
          <Footer />
        </DrawerContext>
      </BrowserRouter>
    </>
  );
}

export default App;
