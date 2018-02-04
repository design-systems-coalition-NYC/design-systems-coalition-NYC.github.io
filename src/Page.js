import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Meta from './Meta'
import CSS from './CSS'
import Box from './Box'

// Generic page wrapper component
const Page = props => (
  <React.Fragment>
    <head>
      <title>Design Systems Coalition NYC</title>
      <Meta />
      <CSS />
    </head>
    <ThemeProvider theme={theme}>
      <Box color='text'>
        {props.children}
      </Box>
    </ThemeProvider>
  </React.Fragment>
)

export default Page
