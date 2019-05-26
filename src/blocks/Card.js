/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    {...props}
    css={{
      p: 3,
      flex: '1 1 256px',
      img: {
        maxWidth: '100%',
        height: 'auto',
      },
      h3: {
        fontSize: 3,
        mt: 0,
        mb: 2,
      },
      '& p': {
        fontSize: 1,
      }
    }}
  />
