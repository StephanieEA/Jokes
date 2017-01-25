import React from 'react'
import { render } from 'react-dom'
import {Router, Link, Indexroute, Route, hashHistory} from 'react-router'

import Home from './components/Home/Home'
import GetJokes from './components/GetJokes/GetJokes'

render((
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/jokes' component={GetJokes} />
  </Router>
), document.querySelector('.application'));
