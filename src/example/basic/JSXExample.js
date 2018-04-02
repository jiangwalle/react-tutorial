import React, { Component } from 'react'

class JSXExample extends Component {
  fullName() {
    return "walle " + "jiang"
  }

  render() {
    let name = "walle"
    let isHandsome = true
    let arr = ['superman', 'ironman', 'spiderman']
    let arr2 = [
      <h3>item1</h3>,
      <h3>item2</h3>,
      <h3>item3</h3>
    ]
    return (
      <div>
        <h1 className='center'>JSX语法</h1>
        <hr />
        
        <h2>使用{}包裹JS表达式</h2>
        <p>hello {name}</p>
        <p>1 + 2 = {1 + 2}</p>
        <p>my full name is: {this.fullName()}</p>
        <hr />

        <h2>条件返回</h2>
        walle is quite  
        {
          isHandsome ? <b> handsome</b> : " normal"
        }

        <hr />

        <h2>在JSX使用map遍历数组成员：</h2>
        {
          arr.map((name, i) => {
              return <p key={i}>Super hero: {name}</p>
          })
        }
        <hr/>
        <h2>自动展开数组</h2>
        {arr2}
      </div>
    )
  }
}

const headerStyle = {
  color: 'pink',
  textAlign: 'center'
}

export default JSXExample