import React, { useEffect, useState } from 'react'

function HookUseEffect1() {
  
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `clicked ${count} time`
        console.log("useEffect - rendered");
    })
  
    return (
    <div>
        <button onClick={() => setCount(preveState => preveState + 1)}> clicked {count} </button>
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default HookUseEffect1