import Text from './Text'

const Heading = Text.withComponent('h2')

Heading.defaultProps = {
  fontSize: 4,
  fontWeight: 700,
  lineHeight: 1.125,
  m: 0,
}

Heading.h1 = Heading.withComponent('h1')
Heading.h2 = Heading.withComponent('h2')
Heading.h3 = Heading.withComponent('h3')
Heading.h4 = Heading.withComponent('h4')
Heading.h5 = Heading.withComponent('h5')
Heading.h6 = Heading.withComponent('h6')

export default Heading
