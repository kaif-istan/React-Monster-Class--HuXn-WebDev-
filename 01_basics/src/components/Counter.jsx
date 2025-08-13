import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count+1)
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Add 1</button>
    </div>
  )
}

export default Counter