import React from 'react'
import Component1 from './Component1'
import '../ComponentStyle.css'
import commonStyle from '../CommonStyle.module.css'
import ClassComponent1 from './ClassComponent1'
import List from './List'

const Component2 = () => {
    const val = "in comp 2 val for comp 1"

    return (
    <div>
        <Component1 value={val} />
        <br />
        <h1>
            this is comp 2
        </h1>
        <label htmlFor="" className={commonStyle.cls1}> comp 2 label </label>
        <ClassComponent1 />
        <List />
    </div>
  )
}

export default Component2