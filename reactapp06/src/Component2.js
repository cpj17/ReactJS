import React, { useState } from 'react'
import Component1 from './Component1'

function Component2() {
    const [name, setName] = useState("def")
  return (
    <div>
        <Component1
            name = {name}
        >
            
        </Component1>
        <br />
        Component2

        <br />
        <input type="text"
            onChange={(e) => setName(e.target.value)}
        />
    </div>
  )
}

export default Component2