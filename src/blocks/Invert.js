/** @jsx jsx */
import { jsx } from 'theme-ui'
import Container from '../components/Container'

export default props =>
  <section
    css={{
      color: 'background',
      bg: 'text',
      py: 4,
    }}>
    <Container css={props.css}>
      {props.children}
    </Container>
  </section>
