/** @jsx jsx */
import { jsx } from 'theme-ui'
import Section from './Section'

export default props =>
  <Section
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: [
        '1fr',
        '1fr',
        'repeat(2, 1fr)',
      ],
      gridGap: 32,
      alignItems: 'center',
      ...props.sx
    }}
  />
