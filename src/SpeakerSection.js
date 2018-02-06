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
      mb={2}
      ratio={4/3}
      src={image}
    />
    <Heading.h4 fontSize={3}>
      {name}
    </Heading.h4>
    <Text fontSize={1}>{bio}</Text>
  </BlockLink>
)

const SpeakerSection = ({
  speakers = []
}) => (
  <Container py={4}>
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
      href: 'https://twitter.com/orrshtuhl?lang=en',
      image: 'http://designsystems.nyc/assets/orrshtuhl.jpg',
      name: 'Orr Shtuhl',
      bio: 'Orr is senior product designer at Wirecutter, where he helps bring trust to reviews on the internet. Previously, he was director of UX at the interactive agency Blenderbox. He has written for A List Apart, and appeared at SXSW and in Fast Company. Orr is also a beer and cheese instructor, and gives beer tours as The Bestest. He has opinions about yeast.'
    },
    {
      href: 'https://twitter.com/mageramoon',
      image: 'http://designsystems.nyc/assets/magera.jpg',
      name: 'Magera Holton',
      bio: 'Magera is a co-founder at Related Works, focused on helping to build tools for cultural institutions to manage, store, and showcase their digital collections. Prior to founding Related Works, she managed the Design Systems team at Etsy.'

    },
    {
      href: 'https://twitter.com/mjovel?lang=en',
      image: 'http://designsystems.nyc/assets/michael.jpg',
      name: 'Michael Jovel',
      bio: 'Michael is a Front-end Developer at the U.S. Food and Drug Administration. He is also the past organizer Bmoresponsive, a conference dedicated to creating things for the multi-device web. Prior to joining the FDA Michael worked for the Department of Defense.',
    },
    {
      href: 'https://medium.com/@caitlinosbahr',
      image: 'http://designsystems.nyc/assets/caitlin.jpg',
      name: 'Caitlin Osbahr',
      bio: 'Caitlin is a senior product designer at BuzzFeed. She‘s currently helping build cross-platform digital products for Tasty, including the recently-launched Tasty app for iOS.',
    },
  ]
}

export default SpeakerSection
