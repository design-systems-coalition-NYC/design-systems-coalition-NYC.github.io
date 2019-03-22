import React from 'react'
import Box from './Box'
import Flex from './Flex'
import Container from './Container'
import Caps from './Caps'
import Avatar from './Avatar'
import Heading from './Heading'
import Text from './Text'
import { organizers } from '../content'

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
      <Heading as='h4'>{name}</Heading>
      <Text>{bio}</Text>
    </Box>
  </Flex>
)

export default () => (
  <section>
    <Box color='white' bg='black'>
      <Container pt={5} pb={4}>
        <Caps>Organizers</Caps>
        <Flex flexWrap='wrap' mx={-3}>
          {organizers.map(profile => (
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
