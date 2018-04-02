import React, { Component }  from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date().toLocaleTimeString()
    }

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({'time': new Date().toLocaleTimeString()})
  }

  componentWillMount() {
    this.timer = setInterval(this.tick, 1000)
    console.log("Set timeout for tick: " + this.timer)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
    console.log("clear timeout: " + this.timer)
  }

  render() {
    return (
      <p>{this.state.time}</p>
    )
  }
}

export default Clock