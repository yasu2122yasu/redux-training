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
    // Sliceにおけるactionは、typeとpayloadを含む
    removeItem: (state, action) => {
      console.log(action);
      // 個別itemを削除するために、filterを使う（reducerの中身）
      // payloadはデータのことで、CartItemでidやtitleなどを指定している
      const itemId = action.payload;
      // fileterは条件式がtrueのものだけを返す。選択した商品以外をかえす
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    removeItem: (state, action) => {
      console.log(action);
      // 個別itemを削除するために、filterを使う（reducerの中身）
      // payloadはデータのことで、CartItemでidやtitleなどを指定している
      const itemId = action.payload;
      // fileterは条件式がtrueのものだけを返す。選択した商品以外をかえす
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      // find関数は、条件式がtrueであれば、trueのものをcartItemの中にいれる
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      cartItem.amount = cartItem.amount - 1;
    },
    // calculateTotalは、複数のイベントでdispatchしたい
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

console.log(cartSlice);

// ここでdispatchのためにexportをしている。
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
