import React from 'react'
import Layout from './layout'

export const wrapRootElement = ({ element, props }) =>
  <Layout>
    {element}
  </Layout>
