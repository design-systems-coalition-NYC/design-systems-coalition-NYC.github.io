import React from 'react'
import Box from './Box'
import Container from './Container'
import BackgroundImage from './BackgroundImage'
import Heading from './Heading'
import Button from './Button'

const image = 'https://user-images.githubusercontent.com/334891/50564896-162cc900-0cf7-11e9-8f67-1798bdb24c71.jpg'

export default () => (
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
            Host or speak at our next meetup!
          </Heading>
          <Button
            as='a'
            bg='white'
            href='http://designsystems.nyc/meetup/'>
            Get Involved
          </Button>
        </Box>
      </Container>
    </BackgroundImage>
  </section>
)
