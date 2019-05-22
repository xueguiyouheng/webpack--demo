import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  constructor(props) {
    super(props)
      
  }

  render() {
    return <nav>
      <Link to="/home">home</Link>
      <Link to="list">list</Link>
    </nav>
  }
}