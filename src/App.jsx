import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<ProductList />} />
          <Route path='/' element={<Product />} />
          <Route path='/' element={<Register />} />
          <Route path='/' element={<Login />} />
          <Cart />
        </Routes>
      </Router> */}
      <Home/>
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Cart /> */}
    </>
  )
}

export default App
