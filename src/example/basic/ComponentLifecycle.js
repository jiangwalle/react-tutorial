import React, { Component } from 'react'
import Clock from './Clock'

class ComponentLifecycle extends Component {
  constructor() {
    super()
    this.state = {
        message: []
    }

    this.print('construct')
    console.log("construct")
  }

  print(message) {
    let messageArr = this.state.message
    messageArr.push(message)
    this.setState(messageArr)
  }

  render() {
    if (!this.state.message.includes('render')) {
      this.print('render')
    }
    return (
      <div>
        <h1 className="center">测试Component生命周期</h1>
        <h2>打印组件挂载的生命周期</h2>
        {
            this.state.message.map(msg => {
                return <p>{msg}</p>
            })
        }
        <hr />

        <h2>时钟</h2>
        <Clock />
      </div>
    )
  }

  componentWillMount() {
    this.print('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.print('componentDidMount')
  }
}

export default ComponentLifecycle