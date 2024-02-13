import React, { useState } from 'react'

function Test3(props) {
    const [screenVariables, setVariableValues] = useState({})
        function setValues(e) {
            const name = e.target.name
            const value = e.target.value

            setVariableValues((prevState) => {
                return {
                    ...prevState, [name] : value
                }
            })
        }
  return (
    <div>
        {props.name}
        {props.children}

        <form action="">
            Name : <input type="text" name="name" autoFocus required
                onChange={setValues}
            /> <br />
            Age : <input type="text" name='age' onChange={setValues} /> <br />
        </form>

        {screenVariables.name}
    </div>
  )
}

export default Test3