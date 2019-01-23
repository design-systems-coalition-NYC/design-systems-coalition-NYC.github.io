import styled from 'styled-components'
import { letterSpacing } from 'styled-system'
import Text from './Text'

const Caps = styled(Text)`
  text-transform: uppercase;
  ${letterSpacing}
`

Caps.defaultProps = {
  fontSize: 3,
  fontWeight: 700,
  letterSpacing: '.2em'
}

export default Caps
