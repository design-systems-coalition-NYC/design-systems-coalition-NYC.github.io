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
      title='Bridging the gap'
      date='March 8'
      location='ustwo'
      image='https://user-images.githubusercontent.com/30531428/28724847-72a707e4-7389-11e7-94d2-950944841032.jpg'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/247693556/'
      text='Design systems help provide a unified language but the path to getting there can be challenging. Successful adoption is often due to the collaboration of a multi-disciplinary team. Our speakers will be sharing how they bridge the gap between design, development, content writers, and other stakeholders.'
      button='RSVP'
    />

      <SpeakerSection />

    <SaveDate
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/247693556/'
      desc='April 19'
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
