import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import ErrorPage from "../components/ErrorPage/ErrorPage";

import HomePage from "../components/HomePage/HomePage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
