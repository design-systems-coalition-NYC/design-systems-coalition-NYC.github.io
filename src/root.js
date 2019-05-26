import React from 'react'
import { Global } from '@emotion/core'
import { ColorModeProvider, ThemeProvider, css } from 'theme-ui'
import ThemeEditor from './components/ThemeEditor'
import theme from './theme'
import components from './mdx-components'

export default props => {
  return (
    <ColorModeProvider initialColorMode='light'>
      <ThemeProvider
        components={components}
        theme={theme}>
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
