import styled from 'styled-components'
import Box from './Box'

const Container = styled(Box)`
  max-width: 1024px;
`

Container.defaultProps = {
  mx: 'auto',
  px: 4,
}

export default Container
