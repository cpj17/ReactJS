import React, {useState, useEffect, useRef} from 'react'

function UseRefHookTwo() {
    const [timer, setTimer] = useState(1)
    const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
            setTimer((prevState) => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
        }
  }, [])
  return (
    <div>
        {timer}
        <br />
        <button onClick={() => clearInterval(timerRef.current)}> stop </button>
    </div>
  )
}

export default UseRefHookTwo