import React from 'react'
import Page from './Page'
import Hero from './Hero'
import Container from './Container'
import Box from './Box'
import Heading from './Heading'
import EventSection from './EventSection'
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
    <EventSection
      title='Defining design principles'
      date='Oct 4'
      location='The New York Times'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/242645527/'
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
