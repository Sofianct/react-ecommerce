import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import Product from "../components/Products/Products";

function AppRouter() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/products" element={<Product />}></Route>
    </Routes>
  );
}

export default AppRouter;
