import { useRef } from "react"

const FocusInput = () => {
    const buttonRef = useRef<HTMLInputElement>(null)
    const focusText = () => {
        buttonRef.current?.focus()
    }
  return (
    <div>
        <input type="text" ref={buttonRef} placeholder="Click to focus!" />
        <button onClick={focusText}>Focus</button>
    </div>
  )
}

export default FocusInput