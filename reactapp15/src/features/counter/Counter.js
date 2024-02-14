import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreament, increament, increamentByValue } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const count2 = useSelector((state) => state.counter.modiCount)
    const arrVal1 = useSelector((state) => state.counter.arr.arrVal1);  // Fix here
    const dispatch = useDispatch()
    
    // const arr = useSelector((state) => state.counter)

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

        <br />

        <h2> Modified Count is {count2} </h2>
        <h2> arr avlue is {arrVal1} </h2>
    </div>
  )
}

export default Counter