import React from 'react'

import Page from '../src/Page'
import Hero from '../src/Hero'
import Container from '../src/Container'
import Box from '../src/Box'
import Heading from '../src/Heading'
import SaveDate from '../src/SaveDate'
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
      title='Design system API’s and the developer experience'
      date='June 20'
      location='Betterment'
      image='https://user-images.githubusercontent.com/334891/41511801-5043d1e2-724c-11e8-8d71-03beb292eb0e.jpg'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/251191026/'
      text='Whether you’re a designer or engineer, everyone interacts with the API of your design system so it’s important to make this a great experience. From tokens to components, and everything in between, we all have difficult decisions to make when designing systems. Our speakers will share their experiences from the early stages to large-scale, and how they work to design a great developer experience.'
      button='RSVP'
    />

      <SpeakerSection />

    <SaveDate
    href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/251864317/'
    desc='July 12'
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
