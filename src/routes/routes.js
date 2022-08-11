import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Dashboard from "../components/Dashboard/Dashboard";

import HomePage from "../components/HomePage/HomePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Dashboard />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default AppRouter;
