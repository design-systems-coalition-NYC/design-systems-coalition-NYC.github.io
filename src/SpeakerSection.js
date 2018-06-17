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
      image: 'https://user-images.githubusercontent.com/334891/41511602-1ce7a7aa-7248-11e8-92cf-b6de7403d6dc.jpg',
      name: 'Jenn Creighton',
      bio:  'Jenn Creighton is a senior front end engineer at ClassPass where she writes code between workouts. She is likely to talk your ear off about React, JavaScript, or her hatred of CSS floats. She lives in New York City with her 2 cats, 1 dog & 13 succulents. Say hello to her @gurlcode!'

    },
    {
      href: '',
      image: 'https://user-images.githubusercontent.com/334891/41511573-6af14268-7247-11e8-9717-8063ce837760.jpg',
      name: 'Arielle Sullivan',
      bio: 'Arielle Sullivan is a software engineer at Betterment where part of her focus is contributing to the team’s design system. She collaborates with designers every day to make powerful, easy to use tools and is excited to share some lessons learned along the way.'

    },
    {
      href: 'https://twitter.com/fabrahamlincoln',
      image: 'https://user-images.githubusercontent.com/334891/41511578-99f0235e-7247-11e8-8b33-a23c8aafbbfe.jpg',
      name: 'Connor McNabb',
      bio: 'Connor McNabb is a product designer with past stints in copywriting, frontend engineering, and digital advertising. Currently a Staff Product Designer at Betterment, Connor laments the “good-old-days” when he could sell clients on the idea of a design system while remaining naive to the challenges of maintaining one.'

    },
    {
      href: 'https://twitter.com/StephManwaring',
      image: 'https://user-images.githubusercontent.com/334891/41511597-0ecb70f2-7248-11e8-9c1d-e93c009f9488.jpg',
      name: 'Stephanie Manwaring',
      bio:  'Stephanie Manwaring is a software engineer at XO Group in NYC. She makes up 50% of the Core Front End squad which is the team of engineers responsible for optimizing all things related to the front end as well as maintaining XO Group’s robust UI pattern library.'
    }
  ]
}

export default SpeakerSection
