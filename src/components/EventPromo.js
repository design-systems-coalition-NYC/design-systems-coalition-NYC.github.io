import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Caps from './Caps'
import Button from './Button'
import Image from './Image'
import Flex from './Flex'
import Box from './Box'
import Text from './Text'

export default ({
  title,
  date,
  location,
  text,
  href,
  button,
  image,
}) => (
  <Container id='next-meetup' py={6}>
    <Flex flexWrap='wrap' alignItems='center'>
      <Box py={4} width={[ 1, 2/3, 1/2 ]}>
        <Heading
          mb={3}
          fontSize={[ 5, 6]}>
          {title}
        </Heading>
        <Caps mb={3}>{date} @ {location}</Caps>
        <Text mb={3} pr={[0,4]}>{text}</Text>
        <Button as='a' href={href}>
          {button}
        </Button>
      </Box>
      <Image py={0} src={image} width={[ 1, 1/3, 1/2 ]} />
    </Flex>
  </Container>
)
