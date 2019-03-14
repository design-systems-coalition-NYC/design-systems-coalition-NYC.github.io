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

import { pastEvents } from '../content'

// import SaveDate from '../components/SaveDate'
// import EventSection from '../components/EventSection'
// import SpeakerSection from '../components/SpeakerSection'
// import HappyHour from '../components/HappyHour'

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
