import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class List extends Component {
  constructor(props) {
    super(props)
      
  }

  render() {
    return <section>List</section>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)