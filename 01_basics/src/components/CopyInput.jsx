import React, { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputVal, setInputVal] = useState("");
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(inputVal).then(() => {
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 10000)
    })
  }
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied}/>
    </div>
  );
};

export default CopyInput;
