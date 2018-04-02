import React, { Component } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildOne'

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>This is parent container</h2>
        <hr />
        <ChildOne/>
        <ChildTwo/>
      </div>
    )
  }
}

export default Parent