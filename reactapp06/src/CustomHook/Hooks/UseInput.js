import {useState} from 'react'

function UseInput(initValue) {
  const [value, setValue] = useState(initValue)
  const reset = () => {
    setValue("")
  }

  const bind = {
    value,
    onChange: e => {
        setValue(e.target.value)
    }
  }

  return [value, reset, bind]
}

export default UseInput