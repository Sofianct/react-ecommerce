import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";

import HomePage from "../components/HomePage/HomePage";
import Products from "../components/Products/Products";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<Products />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default AppRouter;
