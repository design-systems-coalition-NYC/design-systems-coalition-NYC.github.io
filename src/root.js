import React from 'react'
import { Global } from '@emotion/core'
import { ColorModeProvider, ThemeProvider, css } from 'theme-ui'
import ThemeEditor from './components/ThemeEditor'
import theme from './theme'

export default props => {
  return (
    <ColorModeProvider initialColorMode='light'>
      <ThemeProvider theme={theme}>
        <ThemeEditor>
          <Global
            styles={css({
              body: {
                margin: 0,
                fontFamily: 'body',
                lineHeight: 'body',
                color: 'text',
                bg: 'background',
              },
              '*': {
                boxSizing: 'border-box',
              }
            })}
          />
          {props.children}
        </ThemeEditor>
      </ThemeProvider>
    </ColorModeProvider>
  )
}
