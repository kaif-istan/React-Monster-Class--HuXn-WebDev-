import { createContext, type ReactNode, useState } from "react"

// Step 1: Create a context
interface MyContextProps {
    count: number
    increment: () => void
    decrement: () => void
}

const MyContext = createContext<MyContextProps>({
    count: 0,
    increment: () => {},
    decrement: () => {},
})

// Step 2: Create a provider component

const MyProvider = ({children}: {children: ReactNode}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <MyContext.Provider value={{count, increment, decrement}}>
            {children}
        </MyContext.Provider>
    )
}

export {
    MyContext,
    MyProvider
}

