import React, { Component } from 'react'
import './assets/style1.css'
import logo from './assets/apple.png'
import styles from './assets/style2.css'
import styled from 'styled-components'

class StyleExample extends Component {
  render() {
    return (
      <div id="styleExample">
        <h1 className="center">在React使用样式的4种方式</h1>
        <h2>方式1：使用style属性。</h2>
        <p style={{fontSize: '30px', color: 'pink', textAlign: 'center'}}>这段文字使用style属性来设置样式,样式对象定义在标签内</p>
        <p style={fontStyle}>这段文字使用style属性来设置样式，样式对象定义在标签外</p>
        <img src={logo} alt="apple" />
        <hr />

        <h2>方式2：使用外部的样式文件。</h2>
        <p className="text">这段文字使用外部定义的样式文件来设置样式</p>
        <hr />

        <h2>方式3：使用模块化CSS(CSS module)</h2>
        <p className={styles.text}>这段文字使用CSS module来定义样式</p>
        <hr />

        <h2>方式4：使用styled-component定义带样式的组件</h2>
        <StyledP>这段文字使用styled-component定义的带样式组件提供</StyledP>
      </div>  
    )
  }
}

const StyledP = styled.p`
  font-size: 30px;
  color: green;
  text-align: center;
`

const fontStyle = {
  fontSize: '30px',
  color: 'pink',
  textAlign: 'center'
}

export default StyleExample