import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products2',
  initialState: [
    { id: 1, name: 'U.S. POLO ASSN.Mens StefanSneaker', price: 2445, image: 'sh1.png' },
    { id: 2, name: 'U.S. POLO ASSN.Mens RubenSneaker', price: 2849, image: 'sh2.png' },
    { id: 3, name: 'Nike Mens Court Royale 2 NnSneaker', price: 3196, image: 'sh3.png' },
    { id: 4, name: 'Campus Mens OG-11 Sneakers', price: 1367, image: 'sh4.png' },
    // { id: 5, name: 'U.S. POLO ASSN.Mens Monton 5.0Sneaker', price: 1919, image: 'sh5.png' },
    // { id: 6, name: 'Woodland Mens Gc 1868115nw Sneaker', price: 2089, image: 'sh6.png' },
    // { id: 7, name: 'Red Tape Casual Sports Shoes for Men', price: 1769, image: 'sh7.png' },
    // { id: 8, name: 'Nike Mens Jordan 1 Retro HighSneaker', price: 11807, image: 'sh8.png' },
    // { id: 9, name: 'Nike Mens Full Force LoRunning Shoe', price: 2599, image: 'sh9.png' },
    // { id: 10, name: 'Red Tape Men Black Sneaker', price: 1139, image: 'sh10.png' },
    // { id: 11, name: 'adidas Daily 3.0 Men Casual Sneakers', price: 3497, image: 'sh11.png' },
    // { id: 12, name: 'Woodland Mens OGC 3608119Casual Shoe', price: 1939, image: 'sh12.png' },
    // { id: 13, name: 'Nike mens Nike Waffle Debut Se Running Shoes', price: 4910, image: 'sh13.png' },
    // { id: 14, name: 'Puma Mens Ca Pro ClassicSneaker', price: 5318, image: 'sh14.png' },
    // { id: 15, name: 'Puma Unisex-Adult Suede G StapleSneaker', price: 6402, image: 'sh15.png' },
    // Add more products as needed
  ],
  reducers: {},
});

export default productsSlice.reducer;