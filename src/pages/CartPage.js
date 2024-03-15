import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';

function CartPage() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <div className="quantity">
            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
          </div>
          <button className='item-remove-btn' onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className="total">
        Total: ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </div>
    </div>
  );
}

export default CartPage;