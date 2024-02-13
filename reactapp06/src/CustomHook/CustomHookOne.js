import React, { useState } from 'react'
import Counter from './Hooks/Counter'

function CustomHookOne() {
  const [count, increament, decreament, reset] = Counter(0, 1)
  return (
    <div>
        {count}
        <br />
        <button onClick={() => increament()}> increament </button>
        <button onClick={() => decreament()}> decreament </button>
        <button onClick={() => reset()}> reset </button>
    </div>
  )
}

export default CustomHookOne