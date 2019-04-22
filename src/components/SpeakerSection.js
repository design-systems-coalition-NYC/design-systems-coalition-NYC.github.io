import React from 'react'
import Container from './Container'
import Box from './Box'
import Flex from './Flex'
import Caps from './Caps'
import Heading from './Heading'
import Text from './Text'
import BackgroundImage from './BackgroundImage'
import BlockLink from './BlockLink'

const Card = ({
  image,
  name,
  bio,
  href,
}) => (
  <BlockLink href={href}>
    <BackgroundImage
      mb={3}
      ratio={4/3}
      src={image}
    />
    <Heading as='h4' fontSize={3} mb={2}>
      {name}
    </Heading>
    <Text fontSize={1} mb={[5, 4, 0]}>{bio}</Text>
  </BlockLink>
)

const SpeakerSection = ({
  speakers = []
}) => (
  <Container pb={6}>
    <Caps mb={3}>Speakers</Caps>
    <Flex flexWrap='wrap' mx={-3}>
      {speakers.map(speaker => (
        <Box
          key={speaker.name}
          px={3}
          width={[ 1, 1 / Math.floor(speakers.length / 2), 1 / speakers.length ]}
        >
          <Card {...speaker} />
        </Box>
      ))}
    </Flex>
  </Container>
)

SpeakerSection.defaultProps = {
  speakers: []
}

export default SpeakerSection
