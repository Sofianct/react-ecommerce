import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import Product from "../components/Products/Products";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Product />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
