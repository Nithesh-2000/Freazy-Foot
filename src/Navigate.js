import React from 'react'
import { Routes, Route , Link } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Register from './pages/register';
import Home from './pages/Home';
import './index.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

function Navigate() {
  const cart = useSelector((state) => state.cart);
  
  return (
    <>
    <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className='nav'>
        <ul className="navbar-nav mr-auto">
          <div className='brand-icon'>
        <li><Link to={'/'} className="nav-link">
           <img src="ff.png" alt="Home" class="nav-icon"></img> 
        </Link></li>
        </div>
        <div className='links'>
          <li><Link to={'/ProductsPage'} className="nav-link">Products </Link></li>
          {/* <li className='ff'>FREAZY-FOOT</li> */}
          <li><Link to={'/CartPage'} className="nav-link"> 
          <div className="cart-icon">
                <FaShoppingCart /><span>{cart.length}   My Cart</span> 
          </div></Link></li>
          <li><Link to={'/register'} className="nav-link">Register </Link></li>     
          </div>    
        </ul>
      </div>
    </nav>
    </div>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>

        <footer className="footer">
        <p>&copy; 2024 Your Ecommerce Store. All rights reserved.</p>
        {/* Add any footer content, such as links to social media */}
      </footer>
        
    </>
  )
}

export default Navigate;