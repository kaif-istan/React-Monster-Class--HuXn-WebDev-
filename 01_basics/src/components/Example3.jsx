import React, { useEffect, useState } from 'react'

const Example3 = () => {
    const [name, setName] = useState(() => {
        let savedName = localStorage.getItem("name")
        return savedName ? JSON.parse(savedName) : "";
    })

    // update local storage everytime name changes
    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name))
    }, [name])

    const handleChange = (e) =>{
        setName(e.target.value)
    }

    const handleClear = () => {
        setName("")
    }


  return (
    <div>
        <h1>Your Name: {name}</h1>
        <input
        type='text'
        value={name}
        placeholder='Enter your name'
        onChange={handleChange}
        />
        <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default Example3