import React, { useState } from 'react'

const TestComponent1 = () => {
  const [count, setCount] = useState(1)

    return (
        <>
            <h1> {count} </h1>
            <h1> {count} </h1>
            <h1> {count} </h1>
            <button onClick={(prevState) => setCount(count + 1)}> increment </button>
        </>
  )
}

export default TestComponent1