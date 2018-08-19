import React from 'react'
import { Link } from 'react-router-dom'
import InnerHeader from '../src/InnerHeader'
import Container from '../src/Container'
import Heading from '../src/Heading'
import Text from '../src/Text'
import Footer from '../src/Footer'
import TextLink from '../src/Link'
import Cfp from '../src/Cfp'

const About = props => (
  <div>
    <InnerHeader />
    <Container py={6}>
      <Heading mb={3}>
        About
      </Heading>
      <Text fontSize={3} mb={4}>
      Design Systems Coalition NYC is a niche meetup for people enthusiastic about design systems. This includes professionals, freelancers, designers and developers, brand designers, managers and directors, product managers, and anyone else interested in learning more or sharing their own experiences with building design systems.
      </Text>

      <Text fontSize={3} mb={4}>
      The <TextLink fontWeight='bold' href='http://design.systems/coalition/'>Design Systems Coalition</TextLink> first formed in San Francisco and has chapters popping up in cities around the globe. It was born out of the Design Systems slack community started by <TextLink href='https://twitter.com/jina' fontWeight='bold'>Jina Anne</TextLink>.
      </Text>

      <Text fontSize={3} mb={5}>
      The NYC chapter is organized by <TextLink href='https://twitter.com/broccolini' fontWeight='bold'>Diana Mounter</TextLink>, Design Operations Manager at GitHub; <TextLink fontWeight='bold' href='https://twitter.com/TomTaki'>Tom Takigayama</TextLink>, Product Design Manager at Justworks; <TextLink fontWeight='bold' href='https://twitter.com/itschesley'>Chesley Andrews</TextLink>, Product Design Manager at Betterment; and <TextLink href='https://twitter.com/jxnblk' fontWeight='bold'>Brent Jackson</TextLink>, Front-end Architect at Priceline.com.
      </Text>

      <Cfp href='https://t.co/nWT3FMTXCy' />

    </Container>
    <Footer />
  </div>
)

export default About
