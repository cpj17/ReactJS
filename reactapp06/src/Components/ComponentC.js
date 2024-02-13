import React from 'react'
import { UserContext } from './ComponentA'

function ComponentC() {
  return (
    <div>
        ComponentC
        <br />
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <h1> value from compA is {user} </h1>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentC