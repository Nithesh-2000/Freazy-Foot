import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products2',
  initialState: [
    { id: 1, name: 'adidas Mens Astoundrun MRunning Shoe', price: 1769, image: 'ss1.png' },
    { id: 2, name: 'Puma Mens Dazzler Sneakers', price: 1523, image: 'ss2.png' },
    { id: 3, name: 'Campus Mens Rodeo ProRunning Shoe', price: 649, image: 'ss3.png' },
    { id: 4, name: 'Nike Mens Waffle NavRunning Shoe', price: 5614, image: 'ss4.png' },
    { id: 5, name: 'adidas Mens Beastmode MRunning Shoe', price: 2709, image: 'ss5.png' },
    { id: 6, name: 'new balance Mens DriftRunning Shoe', price: 2031, image: 'ss6.png' },
    { id: 7, name: 'Nike Mens Revolution 7Running Shoe', price: 2882, image: 'ss7.png' },
    { id: 8, name: 'Red Tape Sports Walking Shoes for Men', price: 1359, image: 'ss8.png' },
    { id: 9, name: 'Woodland Mens Osgc 4685022Sneaker', price: 1880, image: 'ss9.png' },
    { id: 10, name: 'Woodland Mens Osgc 4758022Sneaker', price: 2087, image: 'ss10.png' },
    { id: 11, name: 'Reebok Mens Velocity Runner Lp', price: 1201, image: 'ss11.png' },
    { id: 12, name: 'Skechers Mens Equalizer 4.0 - Wraithern', price: 3299, image: 'ss12.png' },
  ],
  reducers: {},
});

export default productsSlice.reducer;