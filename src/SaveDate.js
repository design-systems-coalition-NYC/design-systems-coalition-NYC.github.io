import React from 'react'
import Box from './Box'
import Container from './Container'
import Flex from './Flex'
import Text from './Text'
import Link from './NavLink'

const SaveDate = (props) => (
    <Box color='white' bg='black'>
      <Container mb={5}>
        <Flex
          flexWrap='wrap'
          alignItems='baseline'
          mx={-2}
          py={4}>
          <Link
            fontSize={5}
            m={2}
            color='tomato'
            href={props.href}>
            Save the date&#58;
            <Text.span fontWeight={400} m={2} pl={[0,1]} fontSize={5}>{props.title}</Text.span>
            <Text.span fontWeight={400} m={2} fontSize={5}>{props.desc}</Text.span>
          </Link>
        </Flex>
      </Container>
    </Box>
)

export default SaveDate
