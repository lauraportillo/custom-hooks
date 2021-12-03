// React
import { useCounter } from '../hooks/useCounter';
// Styles
import '../stylesheets/BlackCounter.scss';

// FORMA 1 DE PASARLE PROPIEDADES CUSTOM HOOK
const BlackCounter = (props) => {
  const { counter, increase, decrement, reset } = useCounter(10);
  return (
    <section className="black">
      <h2 className="black__title">Black counter</h2>
      <div className="black__counter">{counter}</div>
      <div className="black__btns">
        <button className="black__btns--item" onClick={increase}>
          +
        </button>
        <button className="black__btns--item" onClick={decrement}>
          -
        </button>
        <button className="black__btns--item" onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default BlackCounter;
