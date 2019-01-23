import styled from 'styled-components'
import { height, ratio, style, responsiveStyle } from 'styled-system'
import Box from './Box'

const image = props => props.src ? ({
  backgroundImage: `url(${props.src})`
}) : null

const position = style({
  prop: 'position',
  cssProperty: 'backgroundPosition'
})

const size = style({
  prop: 'size',
  cssProperty: 'backgroundSize'
})

const BackgroundImage = styled(Box)`
  ${image}
  ${position}
  ${size}
  ${height}
  ${ratio}
`

BackgroundImage.defaultProps = {
  size: 'cover',
  position: 'center center',
}

export default BackgroundImage
