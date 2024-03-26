import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('credit card');
  const [userDetails, setUserDetails] = useState({
    country: '',
    fullName: '',
    mobileNumber: '',
    pincode: '',
    flatHouseBuilding: '',
    companyApartment: '',
    areaStreetSector: '',
    landmark: '',
    townCity: '',
    state: ''
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleUseAddress = () => {
    // You can perform any action with the user details here
    // For this example, let's log the user details to the console
    console.log('User Details:', userDetails);
    // Proceed to payment method details
    // You may implement validation logic here before proceeding
  };

  const handlePlaceOrder = () => {
    // Place order logic goes here
    // After successful order placement, you can redirect the user to a thank you page or order confirmation page
    // For now, let's redirect to the homepage
    navigate('/');
  };

  return (
    <div className='checkout-body'>
      <h2>Checkout</h2>
      <div className="checkout">
        <div className="user-details">
          <h3>User Details</h3>
          <form>
            <div className="form-group">
              <label>Country/Region</label>
              <input type="text" name="country" value={userDetails.country} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Full name</label>
              <input type="text" name="fullName" value={userDetails.fullName} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Mobile number</label>
              <input type="text" name="mobileNumber" value={userDetails.mobileNumber} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input type="text" name="pincode" value={userDetails.pincode} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Flat, House no., Building</label>
              <input type="text" name="flatHouseBuilding" value={userDetails.flatHouseBuilding} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Company, Apartment</label>
              <input type="text" name="companyApartment" value={userDetails.companyApartment} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Area, Street, Sector, Village</label>
              <input type="text" name="areaStreetSector" value={userDetails.areaStreetSector} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Landmark</label>
              <input type="text" name="landmark" value={userDetails.landmark} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>Town/City</label>
              <input type="text" name="townCity" value={userDetails.townCity} onChange={handleUserDetailsChange} />
            </div>
            <div className="form-group">
              <label>State</label>
              <input type="text" name="fullName" value={userDetails.fullName} onChange={handleUserDetailsChange} />
            </div>
            <button type="button" className='use-address-btn' onClick={handleUseAddress}>Use this address</button>
          </form>
        </div>
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
                value="debitcreditatm"
                checked={paymentMethod === 'debitcreditatm'}
                onChange={() => handlePaymentMethodChange('debitcreditatm')}
              />
              Debit/Credit/ATM Card
              <div className='paycards'>
              <img className='visa' src="visa.png" alt="Image 1" />
              <img className='master' src="master.png" alt="Image 2" />
              <img className='rupay' src="rupay.png" alt="Image 3" />
              </div>
            </label>
            <label>
              <input
                type="radio"
                value="netbanking"
                checked={paymentMethod === 'netbanking'}
                onChange={() => handlePaymentMethodChange('netbanking')}
              />
              Net Banking
            </label>
            <label>
              <input
                type="radio"
                value="EMI"
                checked={paymentMethod === 'EMI'}
                onChange={() => handlePaymentMethodChange('EMI')}
              />
              EMI
            </label>
            <label>
              <input
                type="radio"
                value="payon"
                checked={paymentMethod === 'payon'}
                onChange={() => handlePaymentMethodChange('payon')}
              />
              Pay on Delivery (Cash/UPI/Card)
            </label>
          </div>
          <div className="place-order">
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
