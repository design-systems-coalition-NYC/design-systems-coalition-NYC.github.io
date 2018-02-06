import React from 'react'
import { Link } from 'react-router-dom'
import Page from './Page'

const About = props => (
  <Page>
    <pre>About TK</pre>
    <Link to='/'>Home</Link>
  </Page>
)

export default About
