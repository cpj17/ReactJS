import React, { useState } from 'react'
import UseInput from './Hooks/UseInput'

function UserForm() {
//   const [firstName, setFirstName] = useState("")
//   const [lastname, setLastName] = useState("")

  const [firstName, resetFirstName, bindFirstName] = UseInput('')
  const [lastName, resetLastName, bindLastName] = UseInput('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }
    return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">FirstName</label>
            <input type="text" {...bindFirstName} />

            <br />
            <label htmlFor="">LastName</label>
            <input type="text" {...bindLastName} />

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UserForm