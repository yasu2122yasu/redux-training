import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogin ? <h3>ログインに成功した</h3> : <h3>ログインしてください</h3>}
      <button onClick={() => dispatch(login())}>ログインorログアウト</button>
    </div>
  );
}

export default App;
