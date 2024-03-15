import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
// import favoritesReducer from '../features/favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    // favorites: favoritesReducer,
    // Add more reducers as needed
  },
  // Add middleware or other store configurations if needed
});

export default store;