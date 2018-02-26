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
      href: 'https://twitter.com/natalyathree',
      image: 'https://user-images.githubusercontent.com/334891/36633305-0dfb71c6-1961-11e8-9cf8-ed0549de2ad0.jpg',
      name: 'Natalya Shelburne',
      bio:  'Natalya is a software engineer at The New York Times and an instructor at the Harvard Extension School where she teaches Modular Design Patterns with React. As a classically trained fine artist and designer, crossing disciplines and blurring the line between design and development is at the heart of much of her work.'

    },
    {
      href: 'https://twitter.com/nlevin',
      image: 'http://designsystems.nyc/assets/noah-levin-bw.jpg',
      name: 'Noah Levin',
      bio: 'Noah is the Design Manager at Figma, and occasionally enjoys the struggle-bus that is design systems. He recently moved back to SF after 2 years in NYC, where he previously led the design team at ClassPass. Before that, he spent 4.5 years designing iOS apps at Google, where he observed Material Design’s birth and development.'
    },
    {
      href: 'https://twitter.com/jxnblk',
      image: 'http://designsystems.nyc/assets/brent-jackson.jpg',
      name: 'Brent Jackson',
      bio: 'Brent is a Principal UX Developer at Priceline.com and cofounder of Compositor, focusing on design systems, developer education, React architecture, and front-end design tooling. Previously at Kickstarter, Etsy, and The Grid, he has created and contributed to several open source projects, including Basscss, CSS Stats, Rebass, and Styled System.'

    },
    {
      href: 'https://twitter.com/itschesley',
      image: 'https://user-images.githubusercontent.com/334891/36644845-1035e674-1a2e-11e8-9a2b-3730cc2187dd.jpg',
      name: 'Chesley Andrews',
      bio:  'Chesley is a Senior Product Design Manager at Betterment where she leads their design systems working group. Previously a Product Designer and Manager at Etsy, she contributed to multiple style guide iterations. An experience designer at heart, Chesley cares about creating compelling, easily understandable interfaces that help people feel empowered and awesome.'

    },
  ]
}

export default SpeakerSection
