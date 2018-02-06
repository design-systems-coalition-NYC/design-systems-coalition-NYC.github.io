import React from 'react'
import Page from './Page'
import Hero from './Hero'
import Container from './Container'
import Box from './Box'
import Heading from './Heading'
import SaveDate from './SaveDate'
import EventSection from './EventSection'
import EventPromo from './EventPromo'
import SpeakerSection from './SpeakerSection'
import PastEventCard from './PastEventCard'
import HostPromo from './HostPromo'
import Organizers from './Organizers'
import Footer from './Footer'
import { pastEvents } from './content'

// Homepage index.html
const Index = props => (
  <Page>
    <Hero />
    <EventPromo
      title='February Happy Hour!'
      date='Feb 7'
      location='The Winslow'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/247261426/'
      button='RSVP'
      text='Join us for drinks and conversation, and make new connections in the design systems community.'
      image='https://user-images.githubusercontent.com/334891/35786610-685e924e-09f6-11e8-846e-f57839488288.jpg'
    />
    {/*
      <SpeakerSection />
    */}
    <SaveDate
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/247534331/'
      title='Save the date!'
      desc='March 8'
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
  </Page>
)

Index.defaultProps = {
  pastEvents,
}

export default Index
