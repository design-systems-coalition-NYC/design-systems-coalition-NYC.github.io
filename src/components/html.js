// example template
module.exports = ({
  html = '',
  css = '',
  scripts,
  title = 'Design Systems Coalition NYC',
  meta = [],
  links = [],
  static: isStatic
}) => `<!DOCTYPE html>
<head>
  <title>${title}</title>
  <meta name='viewport' content='width=device-width,initial-scale=1' />
  <meta name='generator' content='Compositor X0' />
  <link rel='icon' href='assets/favicon.png' />
  <link rel='apple-touch-icon' href='assets/apple-touch-icon.png' />
  <meta name='og:title' content='Design Systems Coalition NYC' />
  <meta name='description' content='A community for people who build design systems to share and learn from each other.' />
  <meta name='og:description' content='A community for people who build design systems to share and learn from each other.' />
  <meta name='og:image' content='http://designsystems.nyc/assets/apple-touch-icon.png' />
  <meta name='twitter:card' content='summary_large_image' />
  <meta name='twitter:site' content='@nyc_dsc' />
  <style>
    * { box-sizing: border-box }
    body {
      margin: 0;
      font-family: 'Helvetica Neue', Helvetica, system-ui, sans-serif;
      line-height: 1.5;
    }
  </style>
  ${css}
</head>
<div id=root>${html}</div>
${scripts}
`
