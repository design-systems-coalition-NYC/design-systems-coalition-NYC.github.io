import React from 'react'
import { Helmet } from 'react-helmet'
import { Global } from '@emotion/core'
import { ThemeProvider, css } from 'theme-ui'
import theme from '../components/theme'
import Box from '../components/Box'
import { description } from '../content'

const App = props => (
  <>
    <Helmet>
      <title>Design Systems Coalition NYC</title>
      <meta
        name='description'
        content='A community for people who build design systems to share and learn from each other'
      />
      <link
        rel='icon'
        type='image/png'
        href='favicon.png'
      />
      <link
        rel='apple-touch-icon'
        href='apple-touch-icon.png'
      />
      <meta name='og:title' content='Design Systems Coalition NYC' />
      <meta name='og:description' content={description} />
      <meta name='og:image' content='http://designsystems.nyc/apple-touch-icon.png' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@nyc_dsc' />
    </Helmet>
    <ThemeProvider theme={theme}>
      <Box color='text'>
        <Global
          styles={css({
            body: {
              margin: 0,
              fontFamily: 'body',
              lineHeight: 'body',
            },
            '*': {
              boxSizing: 'border-box',
            }
          })}
        />
        {props.children}
      </Box>
    </ThemeProvider>
  </>
)

export default App
