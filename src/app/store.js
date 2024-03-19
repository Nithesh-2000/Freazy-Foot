import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import productsReducer2 from '../features/products/productsSlice2';
import productsReducer3 from '../features/products/productsSlice3';
import cartReducer from '../features/cart/cartSlice';
// import favoritesReducer from '../features/favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    products2: productsReducer2,
    products3: productsReducer3,
    cart: cartReducer,
    // favorites: favoritesReducer,
    // Add more reducers as needed
  },
  // Add middleware or other store configurations if needed
});

export default store;