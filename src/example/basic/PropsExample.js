import React, { Component } from 'react'

class PropsExample extends Component {
  render() {
    let name1 = "walle"
    return (
      <div>
        <h1 className="center">Props</h1>
        <h2>通过组件的属性值来传递</h2>
        <Welcome name={name1} />
        <hr />
        
        <h2>props值是只读的</h2>
        <Hello name={name1} />
        <hr />

        <h2>通过defaultProps设置默认值</h2>
        <WelcomeWithDefaultValue/>
      </div>
    )
  }
}

const Welcome = (props) => (
  <p>Welcome {props.name}</p>
)

class Hello extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <p>Hello {this.props.name}</p>
    )
  }
}

class WelcomeWithDefaultValue extends Component {
  static defaultProps = {
    name: "客官"  
  }

  render() {
    return (
      <p>Hello {this.props.name}</p>
    )
  }
}

export default PropsExample