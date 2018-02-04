import React from 'react'
import Page from './Page'
import Hero from './Hero'
import Container from './Container'
import Box from './Box'
import Heading from './Heading'
import PastEventCard from './PastEventCard'
import HostPromo from './HostPromo'
import Organizers from './Organizers'
import Footer from './Footer'
import { pastEvents } from './content'
console.log(pastEvents)

// Homepage index.html
const Index = props => (
  <Page>
    <Hero />
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
