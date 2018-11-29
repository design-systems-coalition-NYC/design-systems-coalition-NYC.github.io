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
      title='Meetup at Datadog'
      date='December 5'
      location='Datadog'
      text='We’ll have 3 lightning talks followed by Q&A, with social time before and after talks. Snacks and drinks provided thanks to our hosts Datadog.'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/255728499/'
      button='RSVP'
      sponsorlink='https://www.datadoghq.com/careers/'
      image='https://datadog-prod.imgix.net/img/dd_logo_70x75.png?fm=png&auto=format&lossless=1'
    />
    <Cfp href='https://t.co/nWT3FMTXCy' />
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
