import Box from './Box'

const Container = Box.extend`
  max-width: 1024px;
`

Container.defaultProps = {
  mx: 'auto',
  px: 4,
}

export default Container
