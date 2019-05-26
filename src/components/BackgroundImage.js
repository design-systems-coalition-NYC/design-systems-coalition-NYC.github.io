import styled from '@emotion/styled'
import { height, style } from 'styled-system'

const ratio = props => props.ratio ? ({
  height: 0,
  paddingBottom: (props.ratio * 100) + '%'
}) : null

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

const BackgroundImage = styled('div')(
  image,
  position,
  size,
  height,
  ratio
)

BackgroundImage.defaultProps = {
  ratio: 1,
  size: 'cover',
  position: 'center center',
}

export default BackgroundImage
