import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";

import HomePage from "../components/HomePage/HomePage";
import Login from "../components/Login/Login";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
