import React from 'react'
import Root from './root'
import Page from './page'

export const wrapRootElement = ({ element, props }) =>
  <Root>
    {element}
  </Root>

export const wrapPageElement = ({ element, props }) => {
  return (
    <Page {...props}>
      {element}
    </Page>
  )
}
