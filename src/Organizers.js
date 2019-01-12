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
    <Box color='white' bg='black'>
      <Container pt={5} pb={4}>
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
      image: 'https://user-images.githubusercontent.com/334891/45935813-4852c000-bf7d-11e8-8e97-8ae77ab85086.jpg',
      name: 'Diana Mounter',
      bio: 'Design Operations Manager at GitHub'
    },
    {
      image: 'https://pbs.twimg.com/profile_images/746829844026114049/N-gpR7I4_400x400.jpg',
      name: 'Tom Takigayama',
      bio: 'Product Design Manager at Justworks',
    },
    {
      image: 'https://user-images.githubusercontent.com/334891/45935737-6f5cc200-bf7c-11e8-8c59-d1b91ae43f70.jpg',
      name: 'Brent Jackson',
      bio: 'Front-end Architect at Priceline',
    },
    {
      image: 'https://pbs.twimg.com/profile_images/807319789521825793/pVkgDhPm_400x400.jpg',
      name: 'Chesley Andrews',
      bio: 'Product Design Manager at Betterment',
    }
  ]
}

export default Organizers
