import React from 'react'
import T1ChildA from './T1ChildA'
import T1ChildB from './T1ChildB'
import T1ChildC from './T1ChildC'

const T1Parent = () => {
  return (
    <div>
        <T1ChildA />
        <T1ChildB />
        <T1ChildC />
    </div>
  )
}

export default T1Parent