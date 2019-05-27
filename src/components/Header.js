/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui'

export default props =>
  <ThemeProvider
    theme={{
      styles: {
        a: {
          color: 'inherit',
          fontWeight: 'bold',
          textDecoration: 'none',
          ':hover': {
            color: 'inherit',
          },
        },
      }
    }}>
    <div
      css={{
        color: 'banner.text',
        bg: 'banner.background',
      }}>
      <Container
        {...props}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 3,
        }}
      />
    </div>
  </ThemeProvider>
