import React from 'react'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primeflex/primeflex.css';                                   // css utility
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css'; 

const ProviderPrimeReact = ({children}) => {
  return (
    <PrimeReactProvider>
        {children}
    </PrimeReactProvider>
  )
}

export default ProviderPrimeReact