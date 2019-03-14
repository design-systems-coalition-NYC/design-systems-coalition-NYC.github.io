// TODO: this looks like dead code
import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Caps from './Caps'
import Button from './Button'
import Image from './Image'
import Flex from './Flex'
import Box from './Box'
import Text from './Text'
import FigmaMap from './FigmaMap'
import FigmaLogo from './FigmaLogo'

export default ({
  ...props
}) => (
  <Container id='next-meetup' my={6}>
    <Flex flexWrap='wrap' alignItems='center'>
      <Box py={4} width={[ 1, 1, 3/5, 1/2 ]}>
        <Heading
          mb={3}
          fontSize={[ 5, 7]}>
          {props.title}
        </Heading>

        <Caps mb={3}>March 8</Caps>
        <Text mb={3} pr={[0,4]}>{props.text}</Text>
        <Button as='a' href={props.href}>
          {props.button}
        </Button>
      </Box>
      <Box width={[1, 1, 2/5, 1/2]} bg='black' color='gray' pb={2}>
        <FigmaMap />
        <Flex alignItems='center' justifyContent='center'>
          <Box ml={-4}style={{ width:'80px' }}>
            <FigmaLogo />
          </Box>
          <Text fontSize={[2,3]} pl={[0,2]}>Sponsored by Figma</Text>
        </Flex>
      </Box>
    </Flex>
  </Container>
)
