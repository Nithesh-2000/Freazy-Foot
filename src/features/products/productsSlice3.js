import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products2',
  initialState: [
    { id: 1, name: 'Bata Mens MaxUniform Dress Shoe', price: 903, image: 'fs1.png' },
    { id: 2, name: 'Bata BataMensHAGRID DERBYFormal', price: 1129, image: 'fs2.png' },
    { id: 3, name: 'Bata Mens Nobel EUniform Dress Shoe', price: 1108, image: 'fs3.png' },
    { id: 4, name: 'Clarks Whiddon Plain Black Leather', price: 2500, image: 'fs4.png' },
    { id: 5, name: 'Clarks Stanford Limit Black Leather', price: 2925, image: 'fs5.png' },
    { id: 6, name: 'Hush Puppies Mens Aaron Derby E 23Sneaker', price:  2098, image: 'fs6.png' },
    { id: 7, name: 'Liberty Mens HOL-125E Formal Lacing Shoes', price: 1079, image: 'fs7.png' },
    { id: 8, name: 'Lee Cooper Mens Lc Driving Style Loafer', price: 2519, image: 'fs8.png' },
    { id: 9, name: 'Hush Puppies Mens Deen Oxford E Oxford', price: 2195, image: 'fs9.png' },
  ],
  reducers: {},
});

export default productsSlice.reducer;