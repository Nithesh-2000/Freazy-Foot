import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id, name, image, price } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        return state.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...state, { id, name, image, price, quantity: 1 }];
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload;
      return state.filter(item => item.id !== productId);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      return state.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      return state.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

export const { addToCart, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
