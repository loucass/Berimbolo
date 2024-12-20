import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import ProductsPage from "./components/page";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import ProductDetail from "./components/ProductDetails";

export default function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
