import React, { useContext } from 'react'
import { UserContext } from './ComponentA'

function ComponentB() {
  const user = useContext(UserContext)
    return (
    <div>
        ComponentB
        <br />
        use context value from compA {user}
    </div>
  )
}

export default ComponentB