import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { products, PRODUCT_VERSION } from "./components/Data/Product";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/pages/Home";
import { AddProduct } from "./components/pages/AddProduct";
import { ProductDetails } from "./components/pages/ProductDetails";
import { Wishlist } from "./components/pages/Wishlist";
import { Login } from "./components/pages/Login";
import { Footer } from "./components/footer";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { WhatsappButton } from "./components/WhatsappButton";

import "./App.css";

export const App = () => {

  // ✅ Product list automatically updates when product data changes
  const [productList, setProductList] = useLocalStorage("products", products, PRODUCT_VERSION);

  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  const [auth, setAuth] = useLocalStorage("auth", { loggedIn: false, user: null });
  const [dark, setDark] = useLocalStorage("dark", false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>
      <BrowserRouter>

        <Navbar 
          auth={auth} 
          setAuth={setAuth} 
          dark={dark} 
          setDark={setDark} 
          wishlistCount={wishlist.length} 
        />

        <Routes>
          <Route 
            path="/" 
            element={<Home productList={productList} setProductList={setProductList} wishlist={wishlist} setWishlist={setWishlist} />} 
          />

          <Route 
            path="/add" 
            element={<AddProduct setProductList={setProductList} auth={auth} />} 
          />

          <Route 
            path="/product/:id" 
            element={<ProductDetails productList={productList} wishlist={wishlist} setWishlist={setWishlist} />} 
          />

          <Route 
            path="/wishlist" 
            element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} 
          />

          <Route 
            path="/login" 
            element={<Login auth={auth} setAuth={setAuth} />} 
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        <WhatsappButton />
      </BrowserRouter>
    </div>
  );
};
