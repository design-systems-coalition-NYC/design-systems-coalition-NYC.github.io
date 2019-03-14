import styled from 'styled-components'
import { height, style } from 'styled-system'
import Box from './Box'

const ratio = props => ({
  width: '100%',
  height: 0,
  paddingBottom: (props.ratio * 100) + '%'
})

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
