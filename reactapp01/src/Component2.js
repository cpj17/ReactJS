import React, { useState } from 'react'

const Comp2 = () => {
  const [counter, setCounter2] = useState(1)
    return (
    <div>
        current value is {counter}
        <br />
        <button onClick={() => setCounter2((prevCount) => {return prevCount + 1})}> click me </button>
    </div>
  )
}

export default Comp2