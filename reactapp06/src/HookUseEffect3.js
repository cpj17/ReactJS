import React, { useEffect, useState } from 'react'

function HookUseEffect3() {
  
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition)
    }, [])

    function logMousePosition(e) {
        console.log("Mouse moved");
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
    <div>
        X - {x} and y - {y}
    </div>
  )
}

export default HookUseEffect3