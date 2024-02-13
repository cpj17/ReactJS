import React, { useEffect, useState } from 'react'

function UseRefHookOne() {
  const [timer, setTimer] = useState(1)

  useEffect(() => {
        const intervalTimer = setInterval(() => {
            setTimer((prevState) => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(intervalTimer)
        }
  }, [])
    return (
    <div>
        {timer}
    </div>
  )
}

export default UseRefHookOne