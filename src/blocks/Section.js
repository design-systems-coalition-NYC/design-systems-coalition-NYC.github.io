/** @jsx jsx */
import { jsx } from 'theme-ui'
import Container from '../components/Container'

export default props =>
  <Container
    css={{
      py: 5,
    }}>
    <section
      {...props}
    />
  </Container>
