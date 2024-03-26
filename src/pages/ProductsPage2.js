import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Link, useNavigate } from "react-router-dom";

function ProductsPage() {
  const products2 = useSelector((state) => state.products2);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated hook

  const handleAddToCart = (product, shouldNavigate) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);
    if (!existingProduct) {
      // If the product is not already in the cart, add it
      dispatch(addToCart(product));
    }

    // If shouldNavigate is true, redirect the user to the checkout page
    if (shouldNavigate) {
      navigate("/CheckoutPage");
    }
  };

  return (
    <div>
      <div className='products-full'>
        <div className="products">
          <h2>SPORTS SHOES</h2>
          <Link to="/ProductsPage"><button className="button1">CASUAL SHOES</button></Link>
          <Link to="/ProductsPage3"><button className="button2">FORMAL SHOES</button></Link>
          <div className="product-list">
            {products2.map((product) => (
              <div key={product.id} className="product">
                <div className='prod-img'>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className='prod-details'>
                  <h3>{product.name}</h3>
                  <p><b>₹{product.price}</b></p>
                  <button className="buttoncart" onClick={() => handleAddToCart(product, false)}>Add to Cart</button>
                  <button className="buttonbuy" onClick={() => handleAddToCart(product, true)}>Buy Now</button>
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
