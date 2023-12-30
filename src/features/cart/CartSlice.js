import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // clearCartはActionの名前
    clearCart: (state) => {
      return { cartItems: [], amount: 0, total: 0 };
    },
  },
});

console.log(cartSlice);

// ここでdispatchのためにexportをしている。
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
