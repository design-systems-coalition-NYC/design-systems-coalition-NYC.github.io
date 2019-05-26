/** @jsx jsx */
import { jsx, css } from 'theme-ui'
import Container from '../components/Container'

export default props =>
  <Container
    css={{
      py: 5,
    }}>
    <section
      {...props}
      css={{
      }}
    />
  </Container>
