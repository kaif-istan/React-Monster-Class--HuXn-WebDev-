import { useContext, type FC } from "react";
import { MyContext } from "../context/MyContext";

const Counter: FC = () => {
  const { count, increment, decrement } = useContext(MyContext);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
