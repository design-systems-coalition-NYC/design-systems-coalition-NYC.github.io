import React from 'react'
import Layout from './layouts'

export const wrapRootElement = ({ element, props }) =>
  <Layout>
    {element}
  </Layout>
