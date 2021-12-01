// React
import React, { useState } from 'react';
// Styles
import '../stylesheets/App.scss';

const App = () => {
  //state
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default App;
