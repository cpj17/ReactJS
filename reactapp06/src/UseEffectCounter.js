import React, { useEffect, useState } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0)
    
    // method 1
    // const tick = () => {
    //     setCount(count + 1)
    // }

    // useEffect(() => {
    //     const timer = setInterval(tick, 1000)

    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])
    
    //method 2
    const tick = () => {
        setCount(prevState => prevState + 1)
    }

    useEffect(() => {
        const timer = setInterval(tick, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

  
    return (
    <div>
        <h1 align="center"> {count} </h1>
    </div>
  )
}

export default UseEffectCounter