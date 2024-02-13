import React, { useContext } from 'react'
import { CountContext } from './UseReducerParentContainer'

function UseReducerParentB() {
    const countUseCintext = useContext(CountContext)
  return (
    <div>
        UseReducerParentB

        <button onClick={() => countUseCintext.countDispatch("plus")}> plus </button>
        <button onClick={() => countUseCintext.countDispatch("minus")}> minus </button>
    </div>
  )
}

export default UseReducerParentB