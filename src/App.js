import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, decreaseCount } from './store/index'; // ここを追加

function App() {
  // useSelector フックを使用して Redux の状態にアクセス
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increaseCount());
  };
  const decrease = () => {
    dispatch(decreaseCount());
  };

  console.log(count);

  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </div>
  );
}

export default App;
