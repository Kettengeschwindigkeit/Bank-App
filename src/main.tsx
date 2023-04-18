import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import ThemeProvider from './providers/ThemeProvider'
import Home from './components/screens/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
