/** @jsx jsx */
import { jsx, Flex, ThemeProvider } from 'theme-ui'
import {
  chunkElements
} from './util'
import BackgroundImage from '../components/BackgroundImage'
import Card from './Card'

const Cards = ({
  Card,
  width,
  children,
  ...props
}) => {
  const cards = chunkElements(type => type === 'img')(children)
  return (
    <ThemeProvider
      components={{
        img: BackgroundImage,
      }}>
      <Flex flexWrap='wrap' mx={-3}>
        {cards.map((card, i) => (
          <Card
            {...props}
            key={i}
            children={card}
            css={{
              width,
            }}
          />
        ))}
      </Flex>
    </ThemeProvider>
  )
}

Cards.defaultProps = {
  Card,
  width: [ '100%', '50%', (100/3) + '%' ],
}

export default Cards
