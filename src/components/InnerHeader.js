import React from 'react'
import { Link } from 'gatsby'
import Box from './Box'
import Container from './Container'
import Heading from './Heading'
import NavLink from './NavLink'

const InnerHeader = (props) => (
  <header>
    <Box
      bg='tomato'
      py={3}>
      <Container>
      <Heading>
        <NavLink as={Link} fontSize={2} to='/'>
          Design Systems Coalition NYC
        </NavLink>
      </Heading>
      </Container>
    </Box>
  </header>

)

export default InnerHeader
