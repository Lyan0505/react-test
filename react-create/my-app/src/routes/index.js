import React, { Component } from 'react';
// import { renderRoutes } from 'react-router-config';
import {
  Route,
  Link,
  Switch,
  //BrowserRouter as Router,
} from 'react-router-dom';

import Home from '../contairn/Home/index';
const ele=(
  <Switch>
    <Route path='/Home' component={Home}></Route>
    
  </Switch>
)

class Roster extends Component{
  render(){
    return ele;
  }
}

export default Roster;
