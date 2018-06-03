import Box from './Box'
import { height, ratio, style, responsiveStyle } from 'styled-system'

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

const BackgroundImage = Box.extend`
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
