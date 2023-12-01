import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector(
    (state) => state.showCounter
  );
  // we pass the function to useSelector and that function will be executed by redux. a function will receive state and then we return the part of the state that we want to excract.
  // components is updated whenever the state in the redux store is changed

  // const incrementHandler = () => {
  //   dispatch({ type: 'increment' });
  // };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  // const increaseHandler = () => {
  //   dispatch({ type: 'increase', amount: 5 });
  // };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // {type: unique id, payload: 5}
  };

  // const decrementHandler = () => {
  //   dispatch({ type: 'decrement' });
  // };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' });
  // };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && (
        <div className={classes.value}>{counter}</div>
      )}
      <div>
        <button onClick={incrementHandler}>
          Increment
        </button>
        <button onClick={increaseHandler}>
          Increase by 5
        </button>
        <button onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
