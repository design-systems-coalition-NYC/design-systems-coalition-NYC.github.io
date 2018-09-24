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
      image: 'https://user-images.githubusercontent.com/334891/45930614-8ecdfd80-bf30-11e8-81b8-aa0874682796.jpg',
      name: 'Deep Shah',
      bio:  'Deep is a product designer at MongoDB, where he leads design for MongoDB Stitch. He’s previously designed for a myriad of different industries, and is drawn to supporting complex problem solving with design system thinking. He most recently attempted to bike from Amsterdam to London on a folding bike, but only got as far as Bruges before he needed to switch to traveling by train. He will probably try another route in the future.'

    },
    {
      href: 'https://betterment.engineering/@ariellesullivan',
      image: 'https://user-images.githubusercontent.com/334891/45930615-8ecdfd80-bf30-11e8-83ec-d0866860c6e5.jpg',
      name: 'Marissa Christy',
      bio: 'Marissa is a Lead Product Designer at Paperless Post where she oversees the design within the e-commerce and native teams. She is especially interested in the intersection of brand and tech, and finding new ways of meaningfully connect these two aspects of product (including design systems).'

    },
    {
      href: 'https://www.linkedin.com/in/connormcnabb/',
      image: 'https://user-images.githubusercontent.com/334891/45934577-ef2f6000-bf6d-11e8-9ab6-18de2bafadca.jpg',
      name: 'Laura Hahn',
      bio: 'Laura is Head of Design at Priceline where she manages a team that works on flexible information architecture, modular design systems, and compelling customer experiences. She previously worked both in-house and as a consultant for companies in various industries including e-commerce, publishing, ad tech, supply chain logistics, and enterprise resource management. She’s keenly interested in the intersection between product design processes and organizational dynamics.'
    }
  ]
}

export default SpeakerSection
