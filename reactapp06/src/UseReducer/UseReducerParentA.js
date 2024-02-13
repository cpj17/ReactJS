import React, { useContext } from 'react'
import { CountContext } from './UseReducerParentContainer'

function UseReducerParentA() {
    const countUseCintext = useContext(CountContext)
  return (
    <div>
        UseReducerParentA 
        <button onClick={() => countUseCintext.countDispatch("plus")}> plus </button>
        <button onClick={() => countUseCintext.countDispatch("minus")}> minus </button>
    </div>
  )
}

export default UseReducerParentA