/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

export default ({
  components,
  theme,
  ...props
}) =>
  <Container
    sx={{
      py: 5,
    }}>
  <section
    {...props}
  />
  </Container>
