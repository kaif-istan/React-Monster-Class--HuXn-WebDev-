import React, { useEffect } from 'react'

const BasicEffect = () => {
    useEffect(() => {
        console.log("Basic effect fired!")
    }, [])
  return (
    <div></div>
  )
}

export default BasicEffect