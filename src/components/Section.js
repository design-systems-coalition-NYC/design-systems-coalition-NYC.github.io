/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui'

export default ({
  components,
  theme,
  ...props
}) =>
  <ThemeProvider
    components={components}
    theme={theme}>
    <Container
      css={{
        py: 5,
      }}>
      <section
        {...props}
      />
    </Container>
  </ThemeProvider>
