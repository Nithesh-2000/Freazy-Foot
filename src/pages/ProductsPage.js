import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

function ProductsPage() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart); // Get the cart state
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='products-full'>
    <div className="products">
      <h2>Welcome to our Store!</h2>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
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
