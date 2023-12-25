import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
