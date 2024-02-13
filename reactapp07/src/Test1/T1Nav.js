import React, { useContext, useState } from 'react'
import DataContext from './hooks/DataContext'

function T1Nav() {
  const {handleChane, val} = useContext(DataContext)
  return (
    <div>
      Nav - 
      <select name="" id="" onChange={handleChane}>
        <option value="val1">val1</option>
        <option value="val2">val2</option>
        <option value="val3">val3</option>
      </select>

      <h3> nav selcted val is {val} </h3>
    </div>
  )
}

export default T1Nav