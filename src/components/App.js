// React
import React, { useState } from 'react';
// Styles
import '../stylesheets/App.scss';

// My Custom Hook
const useCounter = () => {
  //state
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  return {
    counter,
    increase,
    decrement,
    reset,
  };
};

const App = () => {
  const { counter, increase, decrement, reset } = useCounter();

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
