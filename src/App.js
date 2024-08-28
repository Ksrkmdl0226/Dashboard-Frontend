import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "./App.css";
import PrivateRoute from "./components/auth/PrivateRoute";
import Home from "./components/pages/Home";
import DetailsComponet from "./components/pages/DetailsComponet";
import Navbar from "./components/pages/Navbar";

const App = () => {
  return (
    <div style={{ height: "100%", backgroundColor: "#16113C" }}>
      <BrowserRouter>
        <ToastContainer autoClose={2000} />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/kpi-Details" element={<DetailsComponet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
