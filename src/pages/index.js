import React from 'react'

import Hero from '../components/Hero'
import Container from '../components/Container'
import Box from '../components/Box'
import Heading from '../components/Heading'
import Cfp from '../components/Cfp'
import EventPromo from '../components/EventPromo'
import PastEventCard from '../components/PastEventCard'
import HostPromo from '../components/HostPromo'
import Organizers from '../components/Organizers'
import Footer from '../components/Footer'

import {
  nextEvent,
  pastEvents
} from '../content'

const Index = props => (
  <>
    <Hero />
    <EventPromo {...nextEvent} />
    <Cfp href='https://t.co/nWT3FMTXCy' />
    <section id='past-meetups'>
      <Container py={6}>
        <Heading fontSize={[ 5, 6 ]}>
          Past Meetups
        </Heading>
        {props.pastEvents.map(event => (
          <Box key={event.title} py={4}>
            <PastEventCard {...event} />
          </Box>
        ))}
      </Container>
    </section>
    <HostPromo />
    <Organizers />
    <Footer />
  </>
)

Index.defaultProps = {
  pastEvents,
}

export default Index
