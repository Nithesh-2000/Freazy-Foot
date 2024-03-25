import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import {  Link } from "react-router-dom";

function ProductsPage() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
    <div className='products-full'>
    <div className="products">
      <h2>CASUAL SHOES</h2>
  

  <Link to="/ProductsPage2" ><button className="button1">SPORTS SHOES</button></Link>
  <Link to="/ProductsPage3" ><button className="button2">FORMAL SHOES</button></Link>
    
  

    {/* <button className="button2">FORMAL SHOES </button> */}
  
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <div className='prod-img'>
              <img src={product.image} alt={product.name} />
            </div>
            <div className='prod-details'>
              <h3>{product.name}</h3>
              <p><b>₹{product.price}</b></p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              {product.price > 2000 && <p>FREE Delivery by <b>Freazy-Foot</b></p>}
              {product.price > 1000 && product.price < 2000 && <p>Only 50% Delivery charge by <b>Freazy-Foot</b></p>}
            </div>
          </div>
        ))}
      </div>  
    </div>
  </div>
  </div>
  
  );
}

export default ProductsPage;
