import React from 'react'

const dec = state => ({ count: state.count - 1 })
const inc = state => ({ count: state.count + 1 })

class Counter extends React.Component {
  constructor () {
    super()

    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState(inc)
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button
          children='-'
          onClick={e => this.setState(dec)}
        />
        <button
          children='+'
          onClick={e => this.setState(inc)}
        />
      </div>
    )
  }
}

export default Counter
