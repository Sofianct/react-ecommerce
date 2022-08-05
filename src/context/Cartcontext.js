import React, { useState, useEffect } from "react";

export const CartContext = React.createContext({});

const localStorageProducts = JSON.parse(localStorage.getItem("cart")) || [];

const Cartcontext = ({ children }) => {
  const [cart, setCart] = useState(localStorageProducts);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default Cartcontext;
