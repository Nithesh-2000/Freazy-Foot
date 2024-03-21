import React, { useState } from 'react';
import {  Link } from "react-router-dom";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    // username: '',
    email: '',
    password: '',
    // confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Here you would handle registration logic, e.g., sending data to server
      console.log('Form data:', formData);
      // Reset form after successful registration
      setFormData({
        // username: '',
        email: '',
        password: '',
        // confirmPassword: '',
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    // if (!data.username.trim()) {
    //   errors.username = 'Username is required';
    // }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } 
    // else if (data.password !== data.confirmPassword) {
    //   errors.confirmPassword = 'Passwords do not match';
    // }
    return errors;
  };

  return (
    <div className='reg-body'>
    <div className='container-log'>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
          <input
            type="text"
            name="username"
            placeholder='name*'
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div> */}
        <div>
          <input
            type="email"
            name="email"
            placeholder='email*'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder='password*'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        {/* <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder='confirm password*'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div> */}
        <button type="submit" className='buttonlog'>Login</button>
        <div>
        <p>New to Freazy-Foot ?</p>
        <Link to="/register" ><button className="buttonnew">Create your Freazy-Foot account</button></Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegistrationPage;
