import Image from './Image'

const size = props => ({
  width: props.size + 'px',
  height: props.size + 'px'
})

const Avatar = Image.extend`
  border-radius: 99999px;
  ${size}
`

Avatar.defaultProps = {
  size: 96
}

export default Avatar
