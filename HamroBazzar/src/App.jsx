import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/Home/HomePage';
import ProductPage from './components/Products/ProductPage';
import SingleProductPage from './components/SingleProduct/SingleProductPage';
import CartPage from './components/Cart/CartPage';
import MyOrderPage from './components/MyOrder/MyOrderPage';
import LoginPage from './components/Authentication/LoginPage';
import SignupPage from './components/Authentication/SignupPage';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
       {/* < LoginPage /> */}
      <SignupPage />
      </main>
    </div>
  )
}

export default App
