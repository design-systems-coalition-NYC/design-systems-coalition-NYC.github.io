/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    {...props}
    css={{
      maxWidth: 1024,
      mx: 'auto',
      px: 4,
      ...props.css,
    }}
  />
