import React, { useEffect, useState } from 'react'

function HookMouse() {

    useEffect(() => {
        //console.log("use effect rendered hookmouse");
        window.addEventListener("mousemove", logMousePosition)

        return () => {
            console.log("unmounted");
        }
    }, [])

    function logMousePosition(e) {
        const objPos = {x:e.clientX, y:e.clientY }
        setPos(objPos)
    }
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })
  return (
    <div>
        X is {pos.x} and Y is {pos.y}
    </div>
  )
}

export default HookMouse