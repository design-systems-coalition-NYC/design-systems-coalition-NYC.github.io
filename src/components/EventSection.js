import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Caps from './Caps'
import Button from './Button'

const EventSection = ({
  title,
  date,
  location,
  href,
  button
}) => (
  <Container py={5}>
    <Heading
      mb={3}
      fontSize={[ 5, 6]}>
      {title}
    </Heading>
    <Caps mb={3}>{date} @ {location}</Caps>
    <Button as='a' href={href}>
      {button}
    </Button>
  </Container>
)

export default EventSection
