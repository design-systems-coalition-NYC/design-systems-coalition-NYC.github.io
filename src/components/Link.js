import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight
} from 'styled-system'

const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  &:hover { color: tomato; }
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
`

Link.defaultProps = {
  color: 'inherit',
}

export default Link
