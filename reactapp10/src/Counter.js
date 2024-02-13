import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreament, increament, increamentByValue } from './features/counter/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    
    const arr = useSelector((state) => state.counter)
    console.log(arr)

    const [increamentValue, setIncreamentValu] = useState(0)
    const addValue = Number(increamentValue) || 0

  return (
    <div>
        {count}
        <br />
        <button onClick={() => dispatch(increament())}> + </button>
        <button onClick={() => dispatch(decreament())}> - </button>

        <br />
        <input type="text" onChange={(e) => setIncreamentValu(e.target.value)} />
        <br />
        <button onClick={() => dispatch(increamentByValue(addValue))}> + </button>
    </div>
  )
}

export default Counter