import { useState, useReducer } from "react";
import { initialState, counterReducer } from "../counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputVal, setInputVal] = useState('');

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleIncrementByAmount = () => {
    dispatch({type: "incrementByAmount", payload: Number(inputVal)})
    setInputVal('')
  }

  const handleDecrementByAmount = () => {
    dispatch({type: "decrementByAmount", payload: Number(inputVal)})
    setInputVal('')
  }

  return (
    <>
      <div>
        <h2>Count: {state.count}</h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>

      <div>
        <input type="number" onChange={(e) => setInputVal(e.target.value)} value={inputVal} />

        <button onClick={handleIncrementByAmount}>Add</button>
        <button onClick={handleDecrementByAmount}>Subtract</button>
      </div>
    </>
  );
};

export default Counter;
