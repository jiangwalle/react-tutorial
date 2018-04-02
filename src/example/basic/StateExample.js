import React, { Component } from 'react'

class StateExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedin: true,
      name: '匿名用户'
    }

    this.togleLogin = this.togleLogin.bind(this)
  }

  togleLogin() {
    console.log("togle login")
    this.setState({"isLoggedin": !this.state.isLoggedin})
    // this.state.isLoggedin = !this.state.isLoggedin
  }

  visits() {
    console.log(this.state.visitCount)
    this.setState({'visitCount': 1})
    console.log(this.state.visitCount)
  }

  visits3() {
    this.setState(() => {
        return {'visitCount': 1}
    })

    this.setState((prevState) => {
        return {'visitCount': prevState.visitCount + 1}
    })

    this.setState((prevState) => {
        return {'visitCount': prevState.visitCount + 1}
    })
  }

  render() {
    return (
      <div>
        <h1 className="center">State example</h1>
        <h2>state为组件内部定义的状态</h2>
        {
            this.state.isLoggedin && 
            <p>欢迎登陆xx系统</p>
        }
        <hr />

        <h2>setState局部对象更新state</h2>
        <button onClick={this.togleLogin}>{this.state.isLoggedin ? "退出" : "登陆"}</button>
        <hr />

        <h2>setState接收对象参数时可能是异步的</h2>
        <p>网站总访问次数： {this.state.visitCount}</p>
        <button onClick={this.visits.bind(this)}>点击访问1次</button>
        <hr />

        <h2>setState接收函数参数</h2>
        <button onClick={this.visits3.bind(this)}>点击访问3次</button>
      </div>
    )
  }
}

export default StateExample