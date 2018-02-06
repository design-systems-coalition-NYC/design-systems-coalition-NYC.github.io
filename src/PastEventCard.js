import React from 'react'
import Box from './Box'
import Flex from './Flex'
import BackgroundImage from './BackgroundImage'
import Heading from './Heading'
import Text from './Text'
import Caps from './Caps'
import Button from './Button'

const PastEventCard = ({
  image,
  permalink,
  title,
  date,
  location,
  description,
}) => (
  <Flex
    wrap
    mx={-3}
    align='center'>
    <Box
      px={3}
      flex='none'
      width={[ 1, 1/2, 2/5 ]}>
      <BackgroundImage
        src={image}
        bg='gray'
        ratio={3/5}
      />
    </Box>
    <Box px={3} my={3} width={[ 1, 1/2, 3/5 ]}>
      <Heading
        fontSize={[ 4, 5 ]}
        mb={2}>
        {title}
      </Heading>
      <Caps mb={3}>
        {date} @ {location}
      </Caps>
      <Text mb={3}>
        {description}
      </Text>
      <Button.a href={permalink}
        color='white'
        bg='text'>
        View photos & videos
      </Button.a>
    </Box>
  </Flex>
)

export default PastEventCard
