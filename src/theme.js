const heading = {
  lineHeight: 'heading',
  a: {
    color: 'inherit',
    textDecoration: 'none',
    ':hover': {
      color: 'primary',
    }
  }
}

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
    banner: {
      text: '#000',
      background: 'tomato',
    },

    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: 'tomato',
        secondary: 'rebeccapurple',
        banner: {
          text: 'tomato',
          background: 'black',
        },
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
    },
    h2: {
      ...heading,
      fontSize: 5,
    },
    h3: {
      ...heading,
      fontSize: 2,
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    h4: {
      ...heading,
      fontSize: 3,
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
