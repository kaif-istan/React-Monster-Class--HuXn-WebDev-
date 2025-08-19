import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <UserProfile />
      <TodoList />
    </div>
  );
};

export default App;
