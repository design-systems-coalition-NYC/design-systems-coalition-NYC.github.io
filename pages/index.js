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
import HappyHour from '../src/HappyHour'
import Organizers from '../src/Organizers'
import Footer from '../src/Footer'
import { pastEvents } from '../src/content'

// Homepage index.html
const Index = props => (
  <React.Fragment>
    <Hero />

    <EventPromo
      title='Happy Hour!'
      date='Jan 23'
      location='The Winslow'
      text='Join us for a happy hour and meet other design systems professionals and enthusiasts. This event will give folks the opportunity to meet up in a casual setting.'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/257976364/'
      button='RSVP'
      image='https://user-images.githubusercontent.com/334891/41512111-a336b338-7251-11e8-93b8-7371c8e50a39.JPG'
    />
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
  </React.Fragment>
)

Index.defaultProps = {
  pastEvents,
}

export default Index
