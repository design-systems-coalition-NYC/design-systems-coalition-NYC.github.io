/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'

export default props =>
  <ThemeProvider
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
          mb: 0,
        },
        p: {
          m: 0,
        }
      }
    }}
  />

