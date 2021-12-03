// React
import { useCounter } from '../hooks/useCounter';
// Styles
import '../stylesheets/YellowCounter.scss';

// FORMA 2 DE PASARLE PROPIEDADES CUSTOM HOOK
const YellowCounter = (props) => {
  const counter = useCounter(20);
  return (
    <>
      <h2>Yellow counter</h2>
      <div>
        <div>{counter.counter}</div>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.decrement}>-</button>
        <button onClick={counter.reset}>Reset</button>
      </div>
    </>
  );
};

export default YellowCounter;
