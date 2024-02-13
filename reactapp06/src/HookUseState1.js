import React, { useState } from 'react'

function ButtonCompone() {
    const [count, setCount] = useState(0)
    return(
        // <button onClick={() => setCount(prevState => prevState + 1)}> clicked {count} </button>
        <button onClick={() => setCount(count + 1)}> clicked {count} </button>
    )
}

function ButtonCompone2( {count, setCount} ) {
  
  return(
      <button onClick={() => setCount(prevState => prevState + 1)}> clicked {count} </button>
  )
}

function HookUseState1() {
    const [count, setCount] = useState(0)
  return (
    <div>
        {/* <ButtonCompone />
        <ButtonCompone /> */}
        
        <ButtonCompone2 count = {count} setCount = {setCount} />
        <ButtonCompone2 count = {count} setCount = {setCount} />
    </div>
  )
}

export default HookUseState1