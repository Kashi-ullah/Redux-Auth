import { Provider, useDispatch, useSelector } from 'react-redux';
import '../assets/bootstrap.css';
import classes from './Counter.module.css';
const Counter = () => {
  const value = useSelector(state=> state.counter.counter);
  const show = useSelector(state=> state.counter.showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler=()=>{
    dispatch(counterActions.decrement());
  }
  const reset=()=>{
    dispatch(counterActions.reset());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* only show if showCounter is true */}
     {show && <div className={classes.value}>{value}</div>}
      <button className='btn btn-primary mr-2' onClick={incrementHandler}>Increment</button>
      <button className='btn btn-primary mr-2' onClick={decrementHandler}>Decrement</button>
      <button className='btn btn-danger mr-2' onClick={reset}>Reset</button>
      <button className='btn btn-success mr-2' onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;