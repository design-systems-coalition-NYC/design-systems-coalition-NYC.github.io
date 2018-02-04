import React from 'react'
import Box from './Box'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'
import Caps from './Caps'

const Hero = ({
  title,
  subhead,
  description
}) => (
  <header>
    <Box
      pt={6}
      pb={6}
      bg='tomato'
    >
      <Container>
        <Heading.h1
          fontSize={[ 7, 7, 8, 9 ]}
          mb={3}>
          {title}
        </Heading.h1>
        <Caps mb={4}>{subhead}</Caps>
        <Text fontSize={3}>
          {description}
        </Text>
      </Container>
    </Box>
  </header>
)

Hero.defaultProps = {
  title: 'Design Systems Coalition',
  subhead: 'NYC',
  description: 'A community for people who build design systems to share and learn from each other.'
}

export default Hero
