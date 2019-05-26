/** @jsx jsx */
import { jsx, css } from 'theme-ui'
import Container from '../components/Container'

export default props =>
<Container>
  <section
    {...props}
    css={{
      py: 5,
      h2: {
        fontSize: [5, 6],
        mt: 0,
        mb: 3,
      },
      h3: {
        m: 0,
      },
      p: {
      },
      a: {
        color: 'magenta',
        '&[title=button]': {
          p: 3,
          color: 'white',
          bg: 'tomato',
        }
      }
    }}
  />
</Container>
