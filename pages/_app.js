import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/theme'
import Box from '../src/Box'

// Generic page wrapper component
const App = props => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Box color='text'>
        {props.render()}
      </Box>
    </ThemeProvider>
  </React.Fragment>
)

export default App
