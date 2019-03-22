import React from 'react'
import Flex from './Flex'
import Box from './Box'
import Container from './Container'
import NavLink from './NavLink'
import Button from './Button'
import { links } from '../content'

const Footer = ({
  links = [],
}) => (
  <footer>
    <Box color='tomato' bg='black'>
      <Container>
        <Flex
          flexWrap='wrap'
          alignItems='center'
          mx={-2}
          py={3}>
          {links.map(link => (
            <NavLink
              key={link.href}
              m={2}
              href={link.href}>
              {link.text}
            </NavLink>
          ))}
          <Box mx='auto' />
          <Button
            as='a'
            m={2}
            mt={[4,2]}
            href='https://www.meetup.com/NYC-Design-Systems-Coalition/'>
            Join us on Meetup
          </Button>
        </Flex>
      </Container>
    </Box>
  </footer>
)

Footer.defaultProps = {
  links,
}

export default Footer
