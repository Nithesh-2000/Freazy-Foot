import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductsPage() {
  const products3 = useSelector((state) => state.products3);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='products-full'>
    <div className="products">
      <h2>FORMAL SHOES</h2>
      <div className="product-list">
        {products3.map((product) => (
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
    </div>
  );
}

export default ProductsPage;
