/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui'

export default props =>
  <ThemeProvider
    theme={{
      styles: {
        ul: {
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          p: 0,
          m: 0,
          mx: -2,
        },
        li: {
          '&:last-child': {
            ml: 'auto',
          }
        },
        a: {
          color: 'inherit',
          fontWeight: 'bold',
          textDecoration: 'none',
          px: 2,
          py: 2,
          '&[title=button]': {
            my: 3,
          }
        },
      }
    }}>
    <Container>
      <footer
        {...props}
        css={{
          width: '100%',
          py: 4,
        }}
      />
    </Container>
  </ThemeProvider>

