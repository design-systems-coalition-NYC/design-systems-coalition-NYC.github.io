import React from 'react'
import Box from './Box'
import Container from './Container'
import BackgroundImage from './BackgroundImage'
import Heading from './Heading'
import Button from './Button'

const HostPromo = ({
  image,
  heading,
  button
}) => (
  <section>
    <BackgroundImage
      src={image}
      color='white'
      bg='black'>
      <Container py={6}>
        <Box width={[ 1, 1/2 ]}>
          <Heading
            fontSize={[ 5, 6 ]}
            mb={4}>
            {heading}
          </Heading>
          <Button
            as='a'
            bg='white'
            href={button.href}>
            {button.text}
          </Button>
        </Box>
      </Container>
    </BackgroundImage>
  </section>
)

HostPromo.defaultProps = {
  image: 'https://user-images.githubusercontent.com/334891/50564896-162cc900-0cf7-11e9-8f67-1798bdb24c71.jpg',
  heading: 'Host or speak at our next meetup!',
  button: {
    href: 'http://designsystems.nyc/meetup/',
    text: 'Get Involved'
  }
}

export default HostPromo
