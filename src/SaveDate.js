import React from 'react'
import Box from './Box'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import NavLink from './NavLink'

const SaveDate = (props) => (
    <Box color='white' bg='black' mb={5}>
      <Container>
        <Flex wrap
          align='baseline'
          mx={-2}
          py={4}>
          <NavLink
            fontSize={5}
            m={2}
            href={props.href}>
            {props.title}
          </NavLink>
          <Text fontWeight={400} m={2} pl={[0,1]} fontSize={5}>Next meetup&#58;</Text>
          <Text fontWeight={400} m={2} fontSize={5}>{props.desc}</Text>
        </Flex>
      </Container>
    </Box>
)

export default SaveDate
