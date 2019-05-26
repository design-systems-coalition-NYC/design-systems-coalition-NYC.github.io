import React from 'react'
import styled from '@emotion/styled'
import {
  space,
  color,
  fontSize,
  fontWeight
} from 'styled-system'
import { Link } from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

const BaseLink = ({ href = '', ...props }) =>
  isAbsoluteURL(href)
  // eslint-disable-next-line
  ? <a href={href} {...props} />
  : <Link to={href} {...props} />


const NavLink = styled(BaseLink)`
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
