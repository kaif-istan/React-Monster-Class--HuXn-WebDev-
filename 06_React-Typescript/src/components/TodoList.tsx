import { useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: TodoList.length + 1,
      task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.completed ? "(completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
