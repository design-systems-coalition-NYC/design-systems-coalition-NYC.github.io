import React from 'react'
import { Link } from 'gatsby'
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
          {buttons.map(button => (
            <Button
              as='a'
              key={button.href}
              m={2}
              mt={[4,2]}
              href={button.href}>
              {button.text}
            </Button>
          ))}
        </Flex>
      </Container>
    </Box>
  </footer>
)

Footer.defaultProps = {
  links: [
    {
      href: 'http://design.systems/coalition',
      text: 'DSC'
    },
    {
      href: 'https://twitter.com/nyc_dsc',
      text: 'Twitter'
    },
    {
      href: 'https://www.flickr.com/people/158537588@N02/',
      text: 'Flickr'
    },
    {
      href: 'https://www.youtube.com/channel/UC0qWdJQb-hCUVp4ZfbPuPUQ',
      text: 'YouTube'
    },
    {
      href: 'https://publication.design.systems/',
      text: 'Medium'
    },
    {
      href: 'https://github.com/design-systems-coalition-NYC/meetup',
      text: 'GitHub'
    },
    {
      href: 'http://designsystems.herokuapp.com/',
      text: 'Slack'
    },
    {
      href: '/meetup/code-of-conduct',
      text: 'Code of Conduct'
    },
    {
      href: '/styleguide',
      text: 'Style guide'
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
