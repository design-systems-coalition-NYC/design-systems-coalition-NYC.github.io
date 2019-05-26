import styled from '@emotion/styled'
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
} from 'styled-system'
import Box from './Box'

const Flex = styled(Box)`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
`

export default Flex
