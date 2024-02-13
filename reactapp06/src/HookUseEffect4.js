import React, { useEffect, useState } from 'react'

function ButtonComponent() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log("rendered");
    }, [count])

    useEffect(() => {
        console.log("rendered 2");
    }, [count2])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> click {count} </button>
            <button onClick={() => setCount2(count2 + 1)}> click {count2} </button>
        </div>
    )
}

function HookUseEffect4() {
  return (
    <div>
        <ButtonComponent />
    </div>
  )
}

export default HookUseEffect4