import React from 'react'

const CSS = ({ css }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: css
    }}
  />

CSS.defaultProps = {
  css: `
    * { box-sizing: border-box }
    body {
      margin: 0;
      font-family: 'Helvetica Neue', Helvetica, system-ui, sans-serif;
      line-height: 1.5;
    }
  `
}

export default CSS
