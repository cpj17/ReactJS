import React, { useState, useCallback } from 'react'
import UseCallbackHookTitle from './UseCallbackHookTitle'
import UseCallbackHookCount from './UseCallbackHookCount'
import UseCallbackHookButton from './UseCallbackHookButton'

function UseCallbackHookOne() {
  const [age, setAge] = useState(1)
  const [count, setCount] = useState(10)

  const incAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  const incCounter = useCallback(() => {
    setCount(count + 10)
  }, [count])
  
    return (
    <div>
        <UseCallbackHookTitle />

        <UseCallbackHookCount text="age" count = {age} />
        <UseCallbackHookButton handleClick = {incAge}> increment age </UseCallbackHookButton>

        <UseCallbackHookCount text="counter" count = {count} />
        <UseCallbackHookButton handleClick = {incCounter}> increament counter </UseCallbackHookButton>
    </div>
  )
}

export default UseCallbackHookOne