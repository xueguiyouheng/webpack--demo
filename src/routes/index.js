import React from 'react'
import { Route, Switch } from 'react-router'
import Nav from './Nav'
import Home from './Home'
import List from './List'

const routes = (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/list" component={List} />
      <Route component={Home} />
    </Switch>

    <div id="myDiv">123 </div>
  </div>
)

export default routes
