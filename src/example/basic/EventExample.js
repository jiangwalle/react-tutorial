import React, { Component } from 'react'

class EventExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedin: false
    }

    this.togleLogin1 = this.togleLogin1.bind(this)
  }

  togleLogin1() {
    this.setState({'isLoggedin': !this.state.isLoggedin})
  }

  togleLogin2 = () => {
    this.setState({'isLoggedin': !this.state.isLoggedin})
  }

  togleLogin3() {
    this.setState({'isLoggedin': !this.state.isLoggedin})
  }

  handleClick(e) {
    alert("p标签里的文本内容是： " + e.target.innerHTML)
  }

  render() {
    return (
      <div>
        <h1 className="center">事件处理</h1>
        <h2>React中的事件和DOM类似，添加事件处理函数即可。事件以驼峰法命名</h2>
        <button onClick={this.togleLogin1}>{this.state.isLoggedin ? "点击退出" : "点击登录"}</button>
        <hr />

        <h2>React事件处理函数绑定this的几种方法</h2>
        <p>方法1：显示调用bind来绑定。例如：this.togleLogin1 = this.togleLogin1.bind(this)</p>
        <button onClick={this.togleLogin1}>{this.state.isLoggedin ? "点击退出" : "点击登录"}</button>

        <p>方法2：使用public class fields syntax及在类中用箭头函数定义事件处理函数（在creat-react-app中默认开启？</p>
        <button onClick={this.togleLogin2}>{this.state.isLoggedin ? "点击退出" : "点击登录"}</button>

        <p>方法3：在回调函数中使用箭头函数</p>
        <button onClick={(e) => this.togleLogin3(e)}>{this.state.isLoggedin ? "点击退出" : "点击登录"}</button>
        <hr />

        <h2>事件传参: e</h2>
        <p onClick={this.handleClick}>十步杀一人，千里不留行。</p>

      </div>
    )
  }
}

export default EventExample