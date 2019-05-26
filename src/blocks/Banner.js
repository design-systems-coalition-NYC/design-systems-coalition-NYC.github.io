/** @jsx jsx */
import { jsx } from 'theme-ui'
import Container from '../components/Container'

export default props =>
  <header
    css={{
      py: [ 5, 6 ],
      color: 'black',
      bg: 'tomato',
      h1: {
        fontSize: [ 7,, 8, 9 ],
        lineHeight: 'heading',
        m: 0,
      },
      h2: {
      },
      '& p': {
        fontSize: 3,
      }
    }}>
    <Container {...props} />
  </header>
