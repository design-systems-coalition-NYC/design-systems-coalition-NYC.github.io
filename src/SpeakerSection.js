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
      href: 'https://twitter.com/superpedro',
      image: 'https://user-images.githubusercontent.com/334891/38943657-fb362a04-42ff-11e8-8641-6c32e4d73aac.jpg',
      name: 'Pedro Sepulveda',
      bio:  'Pedro Sepulveda is a product designer with 15 years experience in developing products across web & mobile as well as building effective multidisciplinary teams. Before moving to New York to join ustwo, he has worked in Los Angeles for continuum innovations and in London for livework studio - one of the first service design studios in the world - as a design director.'

    },
    {
      href: 'https://twitter.com/mperrotti',
      image: 'https://user-images.githubusercontent.com/334891/38944185-3d1c882c-4301-11e8-84c8-1b3caecf1207.jpg',
      name: 'Mike Perrotti',
      bio: 'Mike Perrotti is one half of Meetups design systems team. He comes from an art and design background, and thrives working in the big exciting grey-area between aesthetics and technology.'
    },
    {
      href: 'https://twitter.com/fabrahamlincoln',
      image: 'https://user-images.githubusercontent.com/334891/38944069-f04c311e-4300-11e8-8311-04e6764e9db0.jpg',
      name: 'Fabian Perez',
      bio: 'Fabian Perez is a designer and advisor based in NYC. He currently serves as Director of Product Design at GitHub. He co-founded AppAction and previously led design teams at WeSpire, LevelUp, and SCVNGR.'

    },
  ]
}

export default SpeakerSection
