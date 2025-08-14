import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Count is ${count}`
    }, [count])
   
  return (
    <div>
        <h1>Count is {count}</h1>
        <button onClick={() => setCount(count+1)}>Add</button>
    </div>
  )
}

export default CounterEffect