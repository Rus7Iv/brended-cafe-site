import React from 'react'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import GlobalStyles from '@/styles/GlobalStyles'
import { theme } from '@/styles/themes'

const ThemedApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

export default ThemedApp
