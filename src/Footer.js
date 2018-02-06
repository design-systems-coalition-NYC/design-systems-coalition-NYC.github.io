import React from 'react'
import Flex from './Flex'
import Box from './Box'
import Container from './Container'
import NavLink from './NavLink'
import Button from './Button'

const Footer = ({
  links = [],
  buttons = []
}) => (
  <footer>
    <Box color='tomato' bg='text'>
      <Container>
        <Flex
          wrap
          align='center'
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
          {buttons.map(button => (
            <Button.a
              key={button.href}
              m={2}
              href={button.href}>
              {button.text}
            </Button.a>
          ))}
        </Flex>
      </Container>
    </Box>
  </footer>
)

Footer.defaultProps = {
  links: [
    {
      href: 'http://design.systems/coalition/',
      text: 'DSC'
    },
    {
      href: 'https://twitter.com/nyc_dsc',
      text: 'Twitter'
    },
    {
      href: 'https://medium.com/design-systems-nyc',
      text: 'Medium'
    },
    {
      href: 'https://github.com/design-systems-coalition-NYC/meetup',
      text: 'GitHub'
    },
    {
      href: '/meetup/code-of-conduct',
      text: 'Code of Conduct'
    },
  ],
  buttons: [
    {
      href: 'https://www.meetup.com/NYC-Design-Systems-Coalition/',
      text: 'Join us on Meetup'
    }
  ]
}

export default Footer
