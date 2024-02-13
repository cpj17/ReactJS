import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
  const [flag, setFlag] = useState(true)
    return (
    <div>
        <button onClick={() => setFlag(!flag)}> Toggle </button>
        {flag && <HookMouse />}
    </div>
  )
}

export default MouseContainer