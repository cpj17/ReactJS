import React, { useState } from 'react'

const DataContext = React.createContext({})

export const DataProvider = ({children}) => {
  const value1 = "value from datacontext"
  
  const [val, setVal] = useState("")
  function handleChane(e) {
    setVal(e.target.value)
  }
    return (
    <DataContext.Provider value = {{
        value1, val, handleChane
    }}>
        {children}
    </DataContext.Provider>
  )
}

export default DataContext