import React from 'react'
import { useSelector } from 'react-redux'

const F1ChildA = () => {
    const count = useSelector((state) => state.counter.count)
  return (
    <div>
        <h1>F1ChildA</h1>
        <h3> value from store {count} </h3>
    </div>
  )
}

export default F1ChildA