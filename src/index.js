import React from 'react'
import Layout from './layout'

const Root = props =>
  <Layout>
    {props.children}
  </Layout>

export const wrapRootElement = ({ element, props }) =>
  <Root>
    {element}
  </Root>
