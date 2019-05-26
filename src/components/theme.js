
export const theme = {
  breakpoints: [
    '32em',
    '48em',
    '64em',
    '96em'
  ],
  fonts: {
    body: 'system-ui, sans-serif',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    black: '#000',
    text: '#000',
    background: '#fff',
    darkgray: '#444',
    gray: '#ccc',
    lightgray: '#eee',
    blue: '#09a',
    tomato: 'tomato',
    darken: `rgba(0, 0, 0, ${1/8})`
  },
  radii: [ 0, 2 ],
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
    512
  ],
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96,
    128
  ],
  styles: {
    h1: {
      fontSize: 6,
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h2: {
      fontSize: 5,
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h3: {
      fontSize: 2,
      lineHeight: 'heading',
      fontWeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    h4: {
      fontSize: 3,
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    a: {
      color: 'tomato',
      '&[title=button]': {
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
        fontSize: 2,
        fontWeight: 'bold',
        px: 3,
        py: 2,
        color: 'text',
        bg: 'tomato',
        '&:hover': {
          color: 'background',
          bg: 'text',
        }
      }
    },
  }
}


export default theme
