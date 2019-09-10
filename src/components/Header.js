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
      sx={{
        color: 'banner.text',
        bg: 'banner.background',
      }}>
      <Container
        {...props}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 3,
        }}
      />
    </div>
  </ThemeProvider>
