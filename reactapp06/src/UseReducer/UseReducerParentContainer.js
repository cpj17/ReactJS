import React, { useReducer } from 'react'
import UseReducerParentA from './UseReducerParentA'
import UseReducerParentB from './UseReducerParentB'

export const CountContext = React.createContext()

function UseReducerParentContainer() {
  const reducer = (state, action) => {
        if (action === "plus")
            return state + 1
        if (action === "minus")
            return state - 1
        if (action === "clear")
            return initialState
  }
  const initialState = 0 
  const [count, dispatch] = useReducer(reducer, initialState)
    return (
    <div>
        count - {count}
        <br />
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <UseReducerParentA />
            <UseReducerParentB />
        </CountContext.Provider>
    </div>
  )
}

export default UseReducerParentContainer