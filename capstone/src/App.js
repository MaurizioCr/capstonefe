import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css';
import Home from './Components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Login from './Components/Login'
import Register from './Components/Register'
import Feedback from './Components/Feedback'
import MyNavbar from './Components/MyNavbar'
import Social from './Components/Social'
import Storia from './Components/Storia'
import Profile from "./Components/Profile"
import CartItem from './Components/Cart';
import ProductList from './Components/ProductList';
import Update from "./Components/Update";


function App() {
  return (
    
    <BrowserRouter>
      <div className="d-flex flex-column">
        <div className="flex-grow-1">
        <MyNavbar/>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Profile/>} path="/profile"/>
            <Route element={<Feedback/>} path="/feedback"/>
            <Route element={<Social/>} path="/social"/>
            <Route element={<Storia/>} path="/storia"/>
            <Route element={<CartItem/>} path="/cart"/>
            <Route element={<Update/>} path="/update"/>
            <Route element={<ProductList/>} path="/buy"/>
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>
        <footer className="text-center" >
          <p className='text-center'>© LastWorld {new Date().getFullYear()}</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App

