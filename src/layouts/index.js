import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../components/theme'
import Box from '../components/Box'
import { description } from '../content'

const Style = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Helvetica Neue', Helvetica, system-ui, sans-serif;
    line-height: 1.5;
  }
  * { box-sizing: border-box }
`

const App = props => (
  <>
    <Helmet>
      <title>Design Systems Coalition NYC</title>
      <meta
        name='description'
        content='A community for people who build design systems to share and learn from each other'
      />
      <link
        rel='apple-touch-icon'
        href='apple-touch-icon.png'
      />
      <meta name='og:title' content='Design Systems Coalition NYC' />
      <meta name='og:description' content={description} />
      <meta name='og:image' content='http://designsystems.nyc/assets/apple-touch-icon.png' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@nyc_dsc' />
    </Helmet>
    <ThemeProvider theme={theme}>
      <Box color='text'>
        <Style />
        {props.children}
      </Box>
    </ThemeProvider>
  </>
)

export default App
