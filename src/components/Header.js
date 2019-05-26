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
          '&:hover': {
            color: 'primary',
          },
        },
      }
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
  </ThemeProvider>
