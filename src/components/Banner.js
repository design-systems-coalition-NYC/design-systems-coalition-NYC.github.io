/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui'

export default props =>
  <ThemeProvider
    theme={{
      styles: {
        h1: {
          fontSize: [ 7, 7, 8 ],
          lineHeight: 'heading',
          m: 0,
        },
        p: {
          fontSize: 3,
        },
      }
    }}>
    <header
      css={{
        py: [ 5, 6 ],
        color: 'banner.text',
        bg: 'banner.background',
      }}>
      <Container {...props} />
    </header>
  </ThemeProvider>
