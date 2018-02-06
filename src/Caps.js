import Text from './Text'
import { letterSpacing } from 'styled-system'

const Caps = Text.extend`
  text-transform: uppercase;
  ${letterSpacing}
`

Caps.defaultProps = {
  fontSize: 3,
  fontWeight: 700,
  letterSpacing: '.2em'
}

export default Caps
