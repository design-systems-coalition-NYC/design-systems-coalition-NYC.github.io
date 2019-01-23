import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import Box from '../components/Box'

const Style = createGlobalStyle`
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
  }
`

const App = props => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Box color='text'>
        <Style />
        {props.children}
      </Box>
    </ThemeProvider>
  </React.Fragment>
)

export default App
