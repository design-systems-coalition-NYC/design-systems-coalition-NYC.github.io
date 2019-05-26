/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    {...props}
    css={{
      // flex: '1 1 320px',
      width: '100%',
      p: 3,
      img: {
        float: 'left',
        mr: 2,
      }
    }}
  />
