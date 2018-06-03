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
    <SaveDate
    href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/249908974/'
    desc='May 23'
    />
    <EventPromo
      title='Bridging the gap'
      date='April 19'
      location='ustwo'
      image='https://user-images.githubusercontent.com/30531428/28724847-72a707e4-7389-11e7-94d2-950944841032.jpg'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/247693556/'
      text='Design systems help provide a unified language but the path to getting there can be challenging. Successful adoption is often due to the collaboration of a multi-disciplinary team. Our speakers will be sharing how they bridge the gap between design, development, content writers, and other stakeholders.'
      button='See who went'
    />

      <SpeakerSection />

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
