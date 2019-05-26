export const theme = {
  breakpoints: [
    '32em',
    '48em',
    '64em',
    '96em'
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'tomato',
    secondary: 'rebeccapurple',

    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: 'tomato',
        secondary: 'magenta',
      },
      tomato: {
        text: '#000',
        background: 'tomato',
        primary: '#018',
        secondary: '#000a52',
      }
    },
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
  ],
  styles: {
    Container: {
      maxWidth: 1280,
    },
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
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
      '&[title=button]': {
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
        fontSize: 2,
        fontWeight: 'bold',
        px: 3,
        py: 2,
        color: 'background',
        bg: 'primary',
        '&:hover': {
          bg: 'secondary',
        }
      }
    },
    pre: {
      fontFamily: 'monospace',
    },
    code: {
      fontFamily: 'monospace',
    }
  }
}


export default theme
