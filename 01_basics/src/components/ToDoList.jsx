import { useState } from "react"

const ToDoList = () => {
    const [todos, setTodos] = useState([])
    const [inputVal, setInputVal] = useState("")

    // handle submit function
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputVal.trim()){
            setTodos([...todos, inputVal])
            setInputVal("")
        }
    }

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }

  return (
    <div>
        <h1>ToDo List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add item" value={inputVal} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
        <ul>
            {
                todos.map((todo, ind) => (
                    <li key={ind}>{todo}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default ToDoList