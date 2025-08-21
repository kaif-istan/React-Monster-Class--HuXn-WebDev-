import { useReducer } from "react"
import counterReducer from "../Reducer/counterReducer"

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, {count: 0})
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
      <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
    </div>
  )
}

export default Counter