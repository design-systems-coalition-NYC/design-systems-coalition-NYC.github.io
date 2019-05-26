/** @jsx jsx */
import { jsx, Container } from 'theme-ui'

export default props =>
  <Container
    css={{
      py: 5,
    }}>
    <section
      {...props}
    />
  </Container>
