import styled from 'styled-components'
import Text from './Text'

const Heading = styled(Text)``

Heading.defaultProps = {
  as: 'h2',
  fontSize: 4,
  fontWeight: 700,
  lineHeight: 1.125,
  m: 0,
}

export default Heading
