import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Count from './components/count';

function App() {
  // useSelector フックを使用して Redux の状態にアクセス
  const count = useSelector((state) => state.count.count);

  return (
    <div className="App">
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <Count />
    </div>
  );
}

export default App;
