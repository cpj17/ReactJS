import React, { useContext } from 'react'
import DataContext from './hooks/DataContext'

function T1ChildA() {
  const {value1, val} = useContext(DataContext)
  return (
    <div>
      T1ChildA
      <h2> {value1} </h2>

      <h3> chaild a value from nav is {val} </h3>
    </div>
  )
}

export default T1ChildA