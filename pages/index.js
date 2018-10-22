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

    <HappyHour
      title='Happy Hour sponsored by Reaktor'
      date='October 25'
      location='The Storehouse'
      text='Join us for a happy hour and meet other design systems professionals and enthusiasts! This event will give folks the opportunity to meet up in a casual setting.'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/254919672/'
      button='RSVP'
      sponsorlink='https://www.reaktor.com/careers/'
      image='https://user-images.githubusercontent.com/334891/47277602-d7102800-d58f-11e8-9926-2101c5879b5d.png'
    />

    <SaveDate
      title='Next meetup'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/255728499/'
      desc='Nov 8th @ Datadog'
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

    <Container pb={5}>
    <Cfp
    href='https://t.co/nWT3FMTXCy'
    />
    </Container>

    <HostPromo />
    <Organizers />
    <Footer />
  </React.Fragment>
)

Index.defaultProps = {
  pastEvents,
}

export default Index
