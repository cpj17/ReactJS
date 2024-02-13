import React, { useState, useMemo } from 'react'

function Counter() {
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1)

    
    const isEven = useMemo(() => {
        let i = 0
        while (i < 900000000) i++
        return count % 2 === 0
    }, [count])

  //   function isEven() {
  //     let i = 0
  //     while (i < 900000000) i++
  //     return count % 2 === 0
  // }

  return (
    <div>
        <button onClick={() => setCount(() => count + 1)} > inc {count} </button>
        {/* <span> {isEven() ? "even" : "odd"} </span> */}
        <span> {isEven ? "even" : "odd"} </span>
        <br />
        <button onClick={() => setCount2(() => count2 + 1)} > inc {count2} </button>
        
    </div>
  )
}

export default Counter