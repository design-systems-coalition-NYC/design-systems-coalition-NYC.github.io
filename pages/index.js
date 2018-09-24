import React from 'react'

import Hero from '../src/Hero'
import Container from '../src/Container'
import Box from '../src/Box'
import Heading from '../src/Heading'
import SaveDate from '../src/SaveDate'
import Cfp from '../src/Cfp'
import EventSection from '../src/EventSection'
import EventPromo from '../src/EventPromo'
import SpeakerSection from '../src/SpeakerSection'
import PastEventCard from '../src/PastEventCard'
import HostPromo from '../src/HostPromo'
import Organizers from '../src/Organizers'
import Footer from '../src/Footer'
import { pastEvents } from '../src/content'

// Homepage index.html
const Index = props => (
  <React.Fragment>
    <Hero />
    <SaveDate
    href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/254919672/'
    desc='Oct 25th @ The Winslow'
    />

    <EventPromo
      title='Putting your design system into practice'
      date='September 27'
      location='MongoDB'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/251864317/'
      text='So you have built your design system, now what? Join us for our next meetup on putting design systems into practice, how they need to evolve alongside your product, and growing adoption.'
      button='RSVP'
    />

    <SpeakerSection />

    <Cfp
    href='https://t.co/nWT3FMTXCy'
    />

    <section id='past-meetups'>
      <Container py={5}>
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
  </React.Fragment>
)

Index.defaultProps = {
  pastEvents,
}

export default Index
