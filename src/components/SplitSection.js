/** @jsx jsx */
import { jsx } from 'theme-ui'
import Section from './Section'

export default props =>
  <Section
    {...props}
    css={{
      display: 'grid',
      gridTemplateColumns: [
        '1fr',
        '1fr',
        'repeat(2, 1fr)',
      ],
      gridGap: 32,
      alignItems: 'center',
      ...props.css
    }}
    theme={{
      styles: {
        img: {
          gridColumnStart: 1,
          gridColumnEnd: 2,
        },
        div: {
          m: 0,
          gridColumnStart: [ 1, 1, 2 ],
          gridColumnEnd: [ 2, 2, 3 ],
        },
        h2: {
          m: 0,
        }
      }
    }}
  />
