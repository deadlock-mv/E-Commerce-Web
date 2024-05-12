import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productlist/product" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/cart" element={<Cart />} />
          {/* <Home /> */}
          {/* <ProductList/> */}
          {/* <Product/> */}
          {/* <Register/> */}
          {/* <Login/> */}
          {/* <Cart/> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
