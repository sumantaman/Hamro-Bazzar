import React from 'react'
import { Routes, Route} from 'react-router-dom'

// import HomePage from "../Home/HomePage";
import ProductPage from "./../../Products/ProductPage";




import SignupPage from "./../../Authentication/SignupPage";
import HomePage from './../../Home/HomePage';
import SingleProductPage from './../SingleProductPage';
import CartPage from './../../Cart/CartPage';
import MyOrderPage from './../../MyOrder/MyOrderPage';
import LoginPage from './../../Authentication/LoginPage';


const Routing = () => {
  return (
   <Routes>
    <Route path='/' element={ <HomePage />} />
    <Route path='/products' element={ <ProductPage />} />
    <Route path='/product/:id' element={ <SingleProductPage />} />
    <Route path='/signup' element={ <SignupPage />} />
    <Route path='/login' element={ <LoginPage />} />
    <Route path='/cart' element={ <CartPage />} />
    <Route path='/myorder' element={ <MyOrderPage />} />
   </Routes>
  )
}


export default Routing