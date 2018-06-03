import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Container from './Container'
import Caps from './Caps'
import Avatar from './Avatar'
import Heading from './Heading'
import Text from './Text'

const ProfileCard = ({
  image,
  name,
  bio
}) => (
  <Flex alignItems='center'>
    <Avatar
      src={image}
    />
    <Box pl={3} width={1}>
      <Heading.h4>{name}</Heading.h4>
      <Text>{bio}</Text>
    </Box>
  </Flex>
)

const Organizers = ({
  profiles = [],
}) => (
  <section>
    <Box color='white' bg='darkgray'>
      <Container py={5}>
        <Caps>Organizers</Caps>
        <Flex flexWrap='wrap' mx={-3}>
          {profiles.map(profile => (
            <Box
              key={profile.name}
              px={3}
              py={3}
              width={[ 1, 1/2 ]}>
              <ProfileCard {...profile} />
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  </section>
)

Organizers.defaultProps = {
  profiles: [
    {
      image: 'https://pbs.twimg.com/profile_images/412413402749743107/jOnza-Eg_400x400.jpeg',
      name: 'Diana Mounter',
      bio: 'Design Systems Manager at GitHub'
    },
    {
      image: 'https://pbs.twimg.com/profile_images/746829844026114049/N-gpR7I4_400x400.jpg',
      name: 'Tom Takigayama',
      bio: 'Product Design Lead at Justworks',
    }
  ]
}

export default Organizers
