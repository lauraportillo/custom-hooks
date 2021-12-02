// React
import React, { useState } from 'react';
// Components
import BlackCounter from './BlackCounter';
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
  // const { counter, increase, decrement, reset } = useCounter();

  const counterBlack = useCounter();
  const counterYellow = useCounter();

  return (
    <div>
      <BlackCounter />
      <div>
        <div>{counterBlack.counter}</div>
        <button onClick={counterBlack.increase}>+</button>
        <button onClick={counterBlack.decrement}>-</button>
        <button onClick={counterBlack.reset}>Reset</button>
      </div>
      <div>
        <div>{counterYellow.counter}</div>
        <button onClick={counterYellow.increase}>+</button>
        <button onClick={counterYellow.decrement}>-</button>
        <button onClick={counterYellow.reset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
