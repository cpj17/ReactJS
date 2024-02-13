import React from 'react'
import { DataProvider } from './hooks/DataContext'
import T1ChildA from './T1ChildA'
import T1Header from './T1Header'
import T1Nav from './T1Nav'
import T1ChildB from './T1ChildB'

function T1Parent() {
  return (
    <DataProvider>
        <h1> parent 1 </h1>
        <T1Header title={"fprt"} />
        <T1Nav />
        <T1ChildA />
        <T1ChildB />
    </DataProvider>
  )
}

export default T1Parent