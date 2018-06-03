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
    <Heading.h4 fontSize={3} mb={2}>
      {name}
    </Heading.h4>
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
  speakers: [
    {
      href: 'https://twitter.com/gurlcode',
      image: 'https://user-images.githubusercontent.com/334891/40892333-bb37ab20-6763-11e8-924a-2c868bf55b35.jpg',
      name: 'Jenn Creighton',
      bio:  'Jenn Creighton is a senior front end engineer at ClassPass where she writes code between workouts. She is likely to talk your ear off about React, JavaScript, or her hatred of CSS floats. She lives in New York City with her 2 cats, 1 dog & 13 succulents. Say hello to her @gurlcode!'

    },
    {
      href: 'https://twitter.com/StephManwaring',
      image: 'https://user-images.githubusercontent.com/334891/40892330-aeb318a8-6763-11e8-8f46-2ba3e50f4c93.png',
      name: 'Stephanie Manwaring',
      bio:  'Stephanie Manwaring is a software engineer at XO Group in NYC. She makes up 50% of the Core Front End squad which is the team of engineers responsible for optimizing all things related to the front end as well as maintaining XO Group’s robust UI pattern library.'
    },
    {
      href: 'https://twitter.com/fabrahamlincoln',
      image: 'http://designsystems.nyc/assets/mystery-avatar.png',
      name: 'Arielle Sullivan & Connor McNabb',
      bio: 'TBC'

    },
  ]
}

export default SpeakerSection
