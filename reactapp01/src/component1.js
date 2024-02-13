import React from "react"
import { useState } from "react"

function Comp1() {
    const [counter, setCounter] = useState(1)

    function increment() {
        setCounter(counter + 1)
    }
    return (
        <>
        <span> current value is {counter} </span> <br />
        <button onClick={() => increment()}> click me </button>
        </>
    )
}

export default Comp1