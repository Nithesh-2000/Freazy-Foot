import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit card');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePlaceOrder = () => {
    // Place order logic goes here
    // After successful order placement, you can redirect the user to a thank you page or order confirmation page
    // For now, let's redirect to the homepage
    navigate('/');
  };

  return (
    <div className='checkout-body'>
      <div className="checkout">
        <h2>Checkout</h2>
        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p><b>Price: ₹{item.price}</b></p>
              <p><b>Quantity: {item.quantity}</b></p>
              <p><b>Total: ₹{item.price * item.quantity}</b></p>
            </div>
          ))}
          <div className="total">
            <b>Total: ₹{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</b>
          </div>
        </div>
        <div className="payment-details">
          <h3>Payment Details</h3>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                value="credit card"
                checked={paymentMethod === 'credit card'}
                onChange={() => handlePaymentMethodChange('credit card')}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => handlePaymentMethodChange('paypal')}
              />
              PayPal
            </label>
            {/* Add more payment methods as needed */}
          </div>
        </div>
        <div className="place-order">
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
