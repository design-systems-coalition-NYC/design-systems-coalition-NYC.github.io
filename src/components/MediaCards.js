/** @jsx jsx */
import { jsx } from 'theme-ui'
import Cards from './Cards'

export default props => console.log(props) ||
  <Cards
    {...props}
    theme={{
      styles: {
        img: {
          float: 'left',
          mr: 3,
          width: 96,
          height: 96,
          paddingBottom: 0,
          borderRadius: 9999,
          filter: 'grayscale(100%)',
        },
        h3: {
          m: 0,
        },
        p: {
          m: 0,
        }
      }
    }}
  />
