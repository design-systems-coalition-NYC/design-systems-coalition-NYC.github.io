import React from 'react'
import Box from './Box'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'
import Caps from './Caps'
import { description } from '../content'

export default () => (
  <header>
    <Box
      pt={6}
      pb={6}
      bg='tomato'
    >
      <Container>
        <Heading
          as='h1'
          fontSize={[ 7, 7, 8, 9 ]}
          mb={3}>
          Design Systems Coalition
        </Heading>
        <Caps mb={4}>NYC</Caps>
        <Text fontSize={3}>
          {description}
        </Text>
      </Container>
    </Box>
  </header>
)
