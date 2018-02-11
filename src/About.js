import React from 'react'
import { Link } from 'react-router-dom'
import Page from './Page'
import InnerHeader from './InnerHeader'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'

const About = props => (
  <Page>
    <InnerHeader />
    <Container py={6}>
      <Heading mb={3}>
        About
      </Heading>
      <Text fontSize={3} mb={4}>
      The Design Systems Coalition is a niche meetup for people enthusiastic about design systems. This includes professionals, freelancers, designers and developers, brand designers, managers and directors, product managers, and anyone else interested in learning more or sharing their own experiences with building design systems.
      </Text>

      <Text fontSize={3} mb={4}>
      The NYC meetup is organized by Diana Mounter, Design Systems Manager at GitHub, Tom Takigayama, Design Lead at Justworks, and Brent Jackson, Principle UX developer at Priceline.com. The meetup first formed in San Francisco and has chapters popping up in cities around the globe. It was born out of the Design Systems slack community started by Jina Anne. Jina is a design systems advocate, former design lead on the Lightning Design System, and organizer of Clarity.
      </Text>
    </Container>
  </Page>
)

export default About
