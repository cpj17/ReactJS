import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

const ProviderChakra = ({children}) => {
  return (
    <ChakraProvider>
        {children}
    </ChakraProvider>
  )
}

export default ProviderChakra