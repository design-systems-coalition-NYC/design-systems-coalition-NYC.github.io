import React from 'react'
import {
  StaticRouter,
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Index from './Index'
import StyleGuide from './StyleGuide'
import About from './About'

const Router = typeof document === 'undefined'
  ? StaticRouter
  : BrowserRouter

class App extends React.Component {
  render () {
    const {
      basename,
      pathname
    } = this.props

    return (
      <Router
        basename={basename}
        location={pathname}>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/styleguide' component={StyleGuide} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    )
  }
}

module.exports = App
