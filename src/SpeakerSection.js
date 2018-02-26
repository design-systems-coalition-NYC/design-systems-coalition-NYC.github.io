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
  <Container pb={5}>
    <Caps mb={3}>Speakers</Caps>
    <Flex wrap mx={-3}>
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
      href: 'https://twitter.com/nlevin',
      image: 'https://user-images.githubusercontent.com/334891/36067595-f2227ebe-0e8d-11e8-9f08-d01885672214.jpg',
      name: 'Noah Levin',
      bio: 'Noah Levin is the Design Manager at Figma, and occasionally enjoys the struggle-bus that is design systems. He recently moved back to SF after 2 years in NYC, where he previously led the design team at ClassPass. Before that, he spent 4.5 years designing iOS apps at Google, where he observed Material Design’s birth and development.'
    },
    {
      href: 'https://twitter.com/jxnblk',
      image: 'https://user-images.githubusercontent.com/334891/36067658-5eef9350-0e8f-11e8-8cd8-c975a0ac4339.jpg',
      name: 'Brent Jackson',
      bio: ''

    },
    {
      href: '',
      image: 'https://user-images.githubusercontent.com/334891/36067791-f87c5fdc-0e92-11e8-9705-421e2d3d571c.png',
      name: '',
      bio:  'Final speaker to be announced.'

    },
  ]
}

export default SpeakerSection
