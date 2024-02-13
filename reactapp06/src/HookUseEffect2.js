import React, {useState, useEffect} from 'react'

function HookUseEffect2() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `clicked ${count} time`
        console.log("useEffect - rendered");
    }, [count])
  
    return (
    <div>
        <button onClick={() => setCount(preveState => preveState + 1)}> clicked {count} </button>
        <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default HookUseEffect2