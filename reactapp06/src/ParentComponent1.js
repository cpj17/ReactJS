import React from 'react'
// import Component1 from './Component1'
import Component2 from './Component2'

function ParentComponent1() {
  return (
    <div>
        ParentComponent1
        <br />
        <br />

        {/* <Component1 /> */}
        <Component2 />
    </div>
  )
}

export default ParentComponent1