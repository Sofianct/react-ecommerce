import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AppRouter from "./routes/routes";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

function App(props) {
  // const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <Cart cartItems={cartItems} onAdd={onAdd} />
      <AppRouter />
      <Products onAdd={onAdd} />
      <Footer />
    </>
  );
}

export default App;
