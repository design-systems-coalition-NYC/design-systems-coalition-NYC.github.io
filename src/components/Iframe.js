/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props =>
  <div
    css={{
      width: '100%',
      height: 0,
      paddingBottom: (900 / 16) + '%',
      position: 'relative',
      overflow: 'hidden',
      outline: '1px solid',
    }}>
    <iframe
      allowFullScreen
      {...props}
      css={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        border: 0
      }}
    />
  </div>
