import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import Box from '../components/Box'

const Style = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, system-ui, sans-serif;
    line-height: 1.5;
  }
  * { box-sizing: border-box }
`

const App = props => (
  <React.Fragment>
    <Helmet>
      <title>Design Systems Coalition NYC</title>
      <meta
        name='description'
        content='A community for people who build design systems to share and learn from each other'
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <Box color='text'>
        <Style />
        {props.children}
      </Box>
    </ThemeProvider>
  </React.Fragment>
)

export default App
