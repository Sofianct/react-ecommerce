import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

const localStorageProducts = JSON.parse(localStorage.getItem("cart")) || [];

function App() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(localStorageProducts);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <BrowserRouter>
        <Header open={open} setOpen={setOpen} />
        <HomePage cart={cart} setCart={setCart} open={open} setOpen={setOpen} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
