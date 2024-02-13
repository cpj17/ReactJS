import {useState} from 'react'

function Counter(initValue, value) {
    const [count, setCount] = useState(initValue)
    function increament() {
      setCount((prevState) => prevState + value)
    }
    function decreament() {
      setCount((prevState) => prevState - value)
    } 
    function reset() {
      setCount(initValue)
    }

    return [count, increament, decreament, reset]
}

export default Counter