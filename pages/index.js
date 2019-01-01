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
      title='Shaping design systems'
      date='December 5'
      location='Datadog'
      text='Featuring talks by Derek Howles from Datadog, Nicole Yeo from Artsy, and Carl Nelson.'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/255728499/'
      button='See who went'
      sponsorlink='https://www.datadoghq.com/careers/'
      image='https://user-images.githubusercontent.com/334891/50564566-e16b4280-0cf3-11e9-8804-1a57fb157aa0.jpg'
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
