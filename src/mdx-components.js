/** @jsx jsx */
import { jsx } from 'theme-ui'

const heading = Tag => props =>
  <Tag {...props}>
    <a
      href={`#${props.id || '!'}`}
      css={{
        color: 'inherit',
        textDecoration: 'none',
      }}>
      {props.children}
    </a>
  </Tag>

export default {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
}
