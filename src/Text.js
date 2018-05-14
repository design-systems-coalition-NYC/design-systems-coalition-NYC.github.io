import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
} from 'styled-system'

const Text = styled.div`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`

Text.p = Text.withComponent('p')
Text.span = Text.withComponent('span')

export default Text
