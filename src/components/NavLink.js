import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight
} from 'styled-system'
import { Link } from 'gatsby'

const NavLink = styled.a`
  text-decoration: none;
  display: inline-block;
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
`

NavLink.defaultProps = {
  py: 2,
  mx: 2,
  fontWeight: 700,
  color: 'inherit',
}

export default NavLink
