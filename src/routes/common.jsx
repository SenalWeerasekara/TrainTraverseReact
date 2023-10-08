import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";

export default function CommonRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
