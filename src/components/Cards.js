/** @jsx jsx */
import { jsx, Flex, ThemeProvider } from 'theme-ui'
import merge from 'lodash.merge'
import {
  chunkElements
} from './util'
import BackgroundImage from './BackgroundImage'
import Card from './Card'

const Cards = ({
  Card,
  width,
  ratio = 1,
  children,
  theme,
  ...props
}) => {
  const cards = chunkElements(type => type === 'img')(children)
  return (
    <ThemeProvider
      components={{
        img: BackgroundImage,
      }}
      theme={merge({
        styles: {
          img: {
            paddingBottom: (ratio * 100) + '%',
          }
        }
      }, theme)}>
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
