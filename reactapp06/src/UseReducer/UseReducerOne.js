import React, { useReducer } from 'react'

function UseReducerOne() {
    const initialState = 0
    const reducer = (state, action) => {
        if (action === "plus")
            return state + 1
        if (action === "minus")
            return state - 1
        if (action === "clear")
            return initialState
    }
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        count - {count}
        <button onClick={() => dispatch("plus")}> plus </button>
        <button onClick={() => dispatch("minus")}> minus </button>
        <button onClick={() => dispatch("clear")}> clear </button>
    </div>
  )
}

export default UseReducerOne