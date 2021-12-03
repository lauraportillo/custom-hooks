// React
import { useState } from 'react';

// My Custom Hook
export const useCounter = () => {
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
