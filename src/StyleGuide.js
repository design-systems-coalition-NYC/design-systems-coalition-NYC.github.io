import React from 'react'
import Page from './Page'
import Box from './Box'
import Container from './Container'
import Heading from './Heading'
import Text from './Text'
import Caps from './Caps'
import Button from './Button'
import NavLink from './NavLink'
import Image from './Image'
import BackgroundImage from './BackgroundImage'

const Section = ({ title, children }) => (
  <Box py={4}>
    <Heading mb={3}>{title}</Heading>
    {children}
  </Box>
)

const StyleGuide = props => (
  <Page>
    <Container py={6}>
      <Heading.h1 fontSize={5}>Style Guide</Heading.h1>
      <Section title='Heading'>
        <Heading fontSize={7}>Font Size 7</Heading>
        <Heading fontSize={6}>Font Size 6</Heading>
        <Heading fontSize={5}>Font Size 5</Heading>
        <Heading fontSize={4}>Font Size 4</Heading>
        <Heading fontSize={3}>Font Size 3</Heading>
        <Heading fontSize={2}>Font Size 2</Heading>
        <Heading fontSize={1}>Font Size 1</Heading>
        <Heading fontSize={0}>Font Size 0</Heading>
      </Section>
      <Section title='Text'>
        <Text>Hello</Text>
      </Section>
      <Section title='Caps'>
        <Caps>Hello</Caps>
      </Section>
      <Section title='Button'>
        <Button mr={2}>Beep</Button>
        <Button mr={2} color='white' bg='text'>Beep</Button>
        <Button mr={2} bg='lightgray'>Beep</Button>
      </Section>
      <Section title='NavLink'>
        <NavLink>Nav Link</NavLink>
      </Section>
      <Section title='Image'>
        <Image
          src='http://designsystems.nyc/assets/join-us-bg-4.jpg'
        />
      </Section>
      <Section title='BackgroundImage'>
        <BackgroundImage
          ratio={1/2}
          src='http://designsystems.nyc/assets/join-us-bg-4.jpg'
        />
      </Section>
      <Section title=''>
      </Section>
    </Container>
  </Page>
)

export default StyleGuide
