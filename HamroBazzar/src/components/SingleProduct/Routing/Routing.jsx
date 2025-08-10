import React from "react";
import { Routes, Route } from "react-router-dom";

// import HomePage from "../Home/HomePage";
import ProductPage from "./../../Products/ProductPage";
import SignupPage from "./../../Authentication/SignupPage";
import HomePage from "./../../Home/HomePage";
import SingleProductPage from "./../SingleProductPage";
import CartPage from "./../../Cart/CartPage";
import MyOrderPage from "./../../MyOrder/MyOrderPage";
import LoginPage from "./../../Authentication/LoginPage";
import Logout from "../../Authentication/Logout";
import ProtectedRoute from "./ProtectedRoute";

const Routing = ({ addToCart, cart }) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route
        path="/product/:id"
        element={<SingleProductPage addToCart={addToCart} />}
      />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={< ProtectedRoute/>}>
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/myorder" element={<MyOrderPage />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default Routing;
