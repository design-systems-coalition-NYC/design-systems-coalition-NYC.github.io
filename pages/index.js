import React from 'react'

import Page from '../src/Page'
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
  <Page>
    <Hero />
    <EventPromo
      title='July Happy Hour'
      date='July 26'
      location='The Winslow'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/251864317/'
      image='https://user-images.githubusercontent.com/334891/43049357-6c22ea40-8dc4-11e8-91a1-d735493c689a.jpg'
      sponsorlink='http://mongodb.design/#/'
      text='Join us for a happy hour and meet other design systems professionals and enthusiasts! This event will give folks the opportunity to meet up in a casual setting. This event is generously sponsored by MongoDB. Get there early to get a free drink before the tab runs out!'
      button='RSVP'
    />

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
  </Page>
)

Index.defaultProps = {
  pastEvents,
}

export default Index
