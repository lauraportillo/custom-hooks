// React
import { useCounter } from '../hooks/useCounter';
// Styles
import '../stylesheets/YellowCounter.scss';

// FORMA 2 DE PASARLE PROPIEDADES CUSTOM HOOK
const YellowCounter = (props) => {
  const counter = useCounter(20);
  return (
    <section className="yellow">
      <h2 className="yellow__title">Yellow counter</h2>
      <div className="yellow__counter">{counter.counter}</div>
      <div className="yellow__btns">
        <button className="yellow__btns--item" onClick={counter.increase}>
          +
        </button>
        <button className="yellow__btns--item" onClick={counter.decrement}>
          -
        </button>
        <button className="yellow__btns--item" onClick={counter.reset}>
          Reset
        </button>
      </div>
    </section>
  );
};

export default YellowCounter;
