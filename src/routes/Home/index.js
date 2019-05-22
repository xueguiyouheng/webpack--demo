import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.less'
import db from '../../db'

class Home extends Component {
  constructor(props) {
    super(props)
      
  }
  componentDidMount() {
    console.log(db.cart.add, 'db')
    db.cart.add({
      a:1,
      b: 2
    },
    {
      aa: 'header'
    }).then((content) => {
      // 成功
      console.log('success')
  }).catch((error) => {
      // 失败 or 有异常被捕获
      console.log('error')
  });
  }

  render() {
    const {home, onClick} = this.props
    return <section className="container">
      <p>{home.id}</p>
      <button onClick={() => {onClick(home.id)}}
      >
        click
      </button>
    </section>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    init: 'init'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch({
        type: 'HOME',
        id: ++id,
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)