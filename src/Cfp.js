import React from 'react'
import Box from './Box'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import Link from './NavLink'

const SaveDate = (props) => (
    <Box color='black' bg='tomato' mb={4}>
      <Container>
        <Flex
          flexWrap='wrap'
          alignItems='baseline'
          mx={-2}
          py={4}>
          <Text.span fontWeight={600} mx={2} mt={2} fontSize={5}>We’re looking for speakers for future meetups!</Text.span>
          <Link
            fontSize={5}
            mx={2}
            color='black'
            href={props.href}>
            Submit a talk →
          </Link>
        </Flex>
      </Container>
    </Box>
)

export default SaveDate
