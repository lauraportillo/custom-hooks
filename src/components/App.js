// React
import { useCounter } from '../hooks/useCounter';
// Components
import BlackCounter from './BlackCounter';
// Styles
import '../stylesheets/App.scss';

const App = () => {
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
