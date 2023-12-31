import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// useEffectは発火のタイミングを決めることができる。
// cartの状態が変更されたときに、useEffectも変更できるようにする
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  // useEffectは第二引数の配列に変更が加わった場合に、第一引数の関数を実行する。
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
