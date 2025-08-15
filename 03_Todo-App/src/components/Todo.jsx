import { useState } from "react";
import "../style.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    setTodos((todos) => {
      return todos.concat({
        text: input,
        id: Date.now(),
      });
    });

    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        placeholder="New task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>

      <ul className="todo-list">
        {todos.map(({ text, id }) => (
          <>
            <li className="todo" key={id}>
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo(id)}>
                x
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
