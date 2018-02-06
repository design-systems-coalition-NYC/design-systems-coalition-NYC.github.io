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
          <Button.a
            bg='white'
            href={button.href}>
            {button.text}
          </Button.a>
        </Box>
      </Container>
    </BackgroundImage>
  </section>
)

HostPromo.defaultProps = {
  image: 'http://designsystems.nyc/assets/join-us-bg-4.jpg',
  heading: 'Host or speak at our next meetup!',
  button: {
    href: 'https://github.com/design-systems-coalition-NYC/meetup/blob/master/README.md#how-to-get-involved-with-our-meetup',
    text: 'Get Involved'
  }
}

export default HostPromo
