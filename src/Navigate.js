import React from 'react'
import { Routes, Route , Link } from "react-router-dom";
import ProductsPage from './pages/ProductsPage';
import ProductsPage2 from './pages/ProductsPage2';
import ProductsPage3 from './pages/ProductsPage3';
import CartPage from './pages/CartPage';
import Register from './pages/register';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/login';
import Home from './pages/Home';
import './index.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
// import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Navigate() {
  const cart = useSelector((state) => state.cart);

    const [products, setProduct] = React.useState('');
  
    const handleChange = (event) => {
      setProduct(event.target.value);
    };
  
  
  return (
    <>
   <div className="navbar-container">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='nav'>
      <ul className="navbar-nav mr-auto">
        <div className='brand-icon'>
          <li>
            <Link to={'/'} className="nav-link">
              <img src="ff4.png" alt="Home" className="nav-icon" />
            </Link>
          </li>
        </div>
        <div className='links'>
          <li>
            <Link to={'/ProductsPage'} className="nav-link">Products </Link>
            {/* <div className="dropdown-menu">
              <ul>
                <li><Link to={'/ProductsPage'} className="dropdown-link">Formal Shoes</Link></li>
                <li><Link to={'/ProductsPage2'} className="dropdown-link">Casual Shoes</Link></li>
                <li><Link to={'/ProductsPage3'} className="dropdown-link">Sports Shoes</Link></li>
              </ul>
            </div> */}
          </li>
          {/* <li>
          <Box sx={{ minWidth: 120 }} className=''> 
             <FormControl fullWidth className='form-drop'>
                <InputLabel id="demo-simple-select-label" className='lab-drop'>Products</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={products}
                    label="Products"
                    onChange={handleChange}
                    className="sel-drop"
                  >
                  <MenuItem value={10}><Link to={'/ProductsPage'} className="dropdown-link css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root.Mui-selected ">Casual Shoes</Link></MenuItem>
                  <MenuItem value={20}><Link to={'/ProductsPage2'} className="dropdown-link">Sports Shoes</Link></MenuItem>
                  <MenuItem value={30}><Link to={'/ProductsPage3'} className="dropdown-link">Formal Shoes</Link></MenuItem>
                  </Select>
               </FormControl>
          </Box>
          </li> */}
          <li>
            <Link to={'/CartPage'} className="nav-link"> 
              <div className="cart-icon">
                <FaShoppingCart /><span>{cart.length}</span> 
              </div>
            </Link>
          </li>
          <li>
            <Link to={'/login'} className="nav-link">Login </Link>
          </li>
        </div>    
      </ul>
    </div>
  </nav>
</div>


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="/ProductsPage2" element={<ProductsPage2 />} />
        <Route path="/ProductsPage3" element={<ProductsPage3 />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />



      </Routes>

        <footer className="footer">
        <p>&copy; 2024 Your Ecommerce Store. All rights reserved.</p>
        {/* Add any footer content, such as links to social media */}
      </footer>
        
    </>
  )
}

export default Navigate;