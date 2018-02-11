import React from 'react'
import Page from './Page'
import Hero from './Hero'
import Container from './Container'
import Box from './Box'
import Heading from './Heading'
import SaveDate from './SaveDate'
import EventSection from './EventSection'
import FigmaEventPromo from './FigmaEventPromo'
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
    <FigmaEventPromo
      title='Tools for collaboration'
      date='March 8'
      href='https://www.meetup.com/NYC-Design-Systems-Coalition/events/247534331/'
      text='From design to development, team collaboration is essential for design systems adoption. Our speakers will share the tools and techniques that have helped them succeed.'
      button='RSVP'
    />
    {/*
      <SpeakerSection />
    */}
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
