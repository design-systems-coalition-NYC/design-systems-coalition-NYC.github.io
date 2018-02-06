import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  borderRadius,
  theme,
} from 'styled-system'

const Button = styled.button`
  appearance: none;
  text-decoration: none;
  font-family: inherit;
  display: inline-block;
  text-align: center;
  border: 0;

  &:focus {}
  &:hover {
    box-shadow: inset 0 0 0 999px ${theme('colors.darken')};
  }
  &:active {}

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
  bg: 'tomato',
  color: 'text'
}

Button.a = Button.withComponent('a')

export default Button
