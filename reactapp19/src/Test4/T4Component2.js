import React from 'react'
import { PrimeReactProvider } from 'primereact/api';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './Style1.css'

const T4Component2 = () => {
  return (
    <PrimeReactProvider>
        <Splitter style={{ height: '860px' }} layout='vertical' >
            <SplitterPanel style={{minHeight: '200px'}} className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 3</SplitterPanel>
        </Splitter>
    </PrimeReactProvider>
  )
}

export default T4Component2