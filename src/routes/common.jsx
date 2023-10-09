import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import UserManagement from "../pages/UserManagement";

export default function CommonRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/test" element={<UserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}
