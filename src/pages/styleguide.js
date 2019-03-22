import React from 'react'
import InnerHeader from '../components/InnerHeader'
import Box from '../components/Box'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Text from '../components/Text'
import Caps from '../components/Caps'
import Button from '../components/Button'
import NavLink from '../components/NavLink'
import Image from '../components/Image'
import BackgroundImage from '../components/BackgroundImage'
import Avatar from '../components/Avatar'
import Logos from '../components/Logos'

const Section = ({ title, children }) => (
  <Box py={4}>
    <Heading mb={3}>{title}</Heading>
    {children}
  </Box>
)

export default () => (
  <>
    <InnerHeader />
    <Container py={6}>
      <Heading as='h1' fontSize={5}>Style Guide</Heading>
      <Section title='Colors'>
        <Box color='text' bg='tomato' p={4}><Text fontSize={4}>tomato</Text></Box>
        <Box color='text' bg='white' p={4}><Text fontSize={4}>text &#35;222</Text></Box>
        <Box color='white' bg='black' p={4}><Text fontSize={4}>black &#35;111</Text></Box>
        <Box color='white' bg='darkgray' p={4}><Text fontSize={4}>darkgray &#35;444</Text></Box>
        <Box color='text' bg='gray' p={4}><Text fontSize={4}>gray &#35;ccc</Text></Box>
        <Box color='text' bg='lightgray' p={4}><Text fontSize={4}>lightgray &#35;eee</Text></Box>
      </Section>
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
      <Section title='Avatar'>
        <Avatar
          src='https://pbs.twimg.com/profile_images/412413402749743107/jOnza-Eg_400x400.jpeg'
        />
      </Section>
      <Section title='Logo artwork'>
        <Logos />
      </Section>
    </Container>
  </>
)
