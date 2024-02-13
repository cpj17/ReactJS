import React from 'react'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

export const UserContext = React.createContext()

function ComponentA() {
  return (
    <div>
        ComponentA
        <UserContext.Provider value={"CPJ"}>
            <ComponentB />
            {/* <ComponentC /> */}
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA