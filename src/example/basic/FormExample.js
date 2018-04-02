import React, { Component } from 'react'

class FormExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      comment: '',
      sex: ''
    }

    this.onNameChange = this.onNameChange.bind(this)
    this.onCommentChange = this.onCommentChange.bind(this)
    this.onSexChange = this.onSexChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onSubmit2 = this.onSubmit2.bind(this)
  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  onCommentChange(e) {
    this.setState({
      comment: e.target.value
    })
  }

  onSexChange(e) {
    this.setState({
      sex: e.target.value
    })
  }

  onSubmit(e) {
    alert(`submit form: name is ${this.state.name}, comment is ${this.state.comment}, sex is ${this.state.sex}`)
    e.preventDefault()
  }

  onSubmit2(e) {
    alert(`submit form with ref: name is ${this.nameInput.value}`, this.nameInput.value)
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1 className="center">Form in React</h1>
        <h2>1. React中的form表单控件为受控组件(controlled component)。 onChange函数可以合并为一个。</h2>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="username">name:</label>
          <input style={nameStyle} name="username" type="text" value={this.state.name} onChange={this.onNameChange}></input> <br />

          <label htmlFor="comment">comment:</label>
          <textarea style={textArea} value={this.state.comment} onChange={this.onCommentChange}></textarea> <br />

          <label>sex:</label>
          <select value={this.state.sex} onChange={this.onSexChange.bind(this)}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="both">both</option>
          </select>  <br/>

          <button style={button} type="submit">submit</button>
        </form>

        <hr />
        <h2>2. 使用ref将form表单变成非受控组件</h2>
        <form>
          <label>
            Names: 
            <input type="text" ref={(nameInput) => this.nameInput = nameInput}></input>
          </label>
          <button type="button" onClick={this.onSubmit2}>submit</button>
        </form>
      </div>
    )
  }
}

const nameStyle = {
  marginLeft: '45px'
}

const textArea = {
  width: '350px',
  height: '250px',
  marginLeft: '20px'
}

const button = {
  width: '80px',
  height: '50px',
  backgroundColor: 'pink',
  color: '#555',
  fontSize: '20px',
  marginTop: '20px',
  outline: 'none',
  border: 'none'
}

export default FormExample