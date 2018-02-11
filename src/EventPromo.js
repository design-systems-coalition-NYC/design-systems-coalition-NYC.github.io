import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Caps from './Caps'
import Button from './Button'
import Image from './Image'
import Flex from './Flex'
import Box from './Box'
import Text from './Text'

const EventPromo = (props) => (
  <Container id='next-meetup' py={6}>
    <Flex wrap align='center'>
      <Box py={4} width={[ 1, 2/3, 1/2 ]}>
        <Heading
          mb={3}
          fontSize={[ 5, 6]}>
          {props.title}
        </Heading>
        <Caps mb={3}>{props.date} @ {props.location}</Caps>
        <Text mb={3} pr={[0,4]}>{props.text}</Text>
        <Button.a href={props.href}>
          {props.button}
        </Button.a>
      </Box>
      <Image py={4} src={props.image} width={[ 1, 1/3, 1/2 ]} />
    </Flex>
  </Container>
)

export default EventPromo
