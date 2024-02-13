import React, { useState} from 'react'
import RenderingContextChildA from './RenderingContextChildA'
import RenderingContextChildB from './RenderingContextChildB'

export const CountContext = React.createContext()

function RenderingContextContainer() {
  console.log("RenderingContextContainer");
  const [count, setCount] = useState(0)
    return (
    <div>
        <button onClick={() => setCount(count + 1)}> click {count} </button>
        <br />
        <RenderingContextChildA />
        <CountContext.Provider value = {count}>
            <RenderingContextChildB />
        </CountContext.Provider>
    </div>
  )
}

export default RenderingContextContainer