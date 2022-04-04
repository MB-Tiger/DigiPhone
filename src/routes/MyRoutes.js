import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Producst from "../components/Producst";
import ErrorPage from "../components/ErrorPage";
import ProductInfo from "../components/ProductInfo";
import ShoppingCart from "../components/ShoppingCart";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";
import FavoritesList from "../components/FavoritesList";
import OrdersList from "../components/OrdersList";
import AdminPanel from "../components/AdminPanel";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
        <Route path="/userprofile" element={<UserProfile />}>
          <Route path="favorites" element={<FavoritesList />} />
          <Route path="orders" element={<OrdersList />} />
        </Route>
        <Route path="/products" element={<Producst />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
