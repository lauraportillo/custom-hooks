// React
import { useCounter } from '../hooks/useCounter';
// Styles
import '../stylesheets/BlackCounter.scss';

// FORMA 1 DE PASARLE PROPIEDADES CUSTOM HOOK
const BlackCounter = (props) => {
  const { counter, increase, decrement, reset } = useCounter(10);
  return (
    <>
      <div>Hola soy un contador negro</div>
      <div>
        <div>{counter}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default BlackCounter;
