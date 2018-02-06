import React from 'react'
import {
  StaticRouter,
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Index from './Index'
import StyleGuide from './StyleGuide'

const Router = typeof document === 'undefined'
  ? StaticRouter
  : BrowserRouter

class App extends React.Component {
  render () {
    const {
      basename,
      pathname
    } = this.props
    console.log(pathname)

    return (
      <Router
        basename={basename}
        location={pathname}>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/style-guide' component={StyleGuide} />
        </Switch>
      </Router>
    )
  }
}

module.exports = App
