import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductsPage() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='products-full'>
    <div className="products">
      <h2>CASUAL SHOES</h2>
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
            <p>FREE Delivery by <b>Freazy-Foot</b></p>
            </div>
          </div>
        ))}
      </div>  
    </div>
    {/* <div className="ad1">
      <h2>Advertisement</h2>
      <img className='adimg' src="img2.jpg" alt="Advertisement" />
      <p>Advertisement text goes here</p>
    </div> */}
    </div>
  );
}

export default ProductsPage;
