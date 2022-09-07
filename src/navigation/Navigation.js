import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Cart from '../pages/Cart/Cart'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Menu from '../pages/Menu/Menu'
import PaymentSuccess from '../pages/PaymentSuccess/PaymentSuccess'
import Register from '../pages/Register/Register'
import { useSelector } from 'react-redux'
import { cartProducts } from '../stores/cart/cartSlice'


function Navigation() {

  const productsInCart = useSelector(cartProducts)

  return (
    <div>
      <BrowserRouter>
        <Header cartCount={productsInCart ? productsInCart.length : 0}/>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/cart' element={<Cart />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/menu' element={<Menu />}> </Route>
          <Route path='/payment-success' element={<PaymentSuccess />}> </Route>
          <Route path='/register' element={<Register />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
