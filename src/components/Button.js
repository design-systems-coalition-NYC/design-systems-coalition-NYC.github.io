import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  borderRadius,
} from 'styled-system'

const Button = styled.button`
  appearance: none;
  text-decoration: none;
  font-family: inherit;
  display: inline-block;
  text-align: center;
  border: 0;

  ${space}
  ${width}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${borderRadius}
`

Button.defaultProps = {
  fontSize: 2,
  fontWeight: 700,
  m: 0,
  px: 3,
  py: 2,
  borderRadius: 0,
  bg: 'primary',
  color: 'background'
}

export default Button
