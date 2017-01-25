import React from 'react'
import { render } from 'react-dom'
import {Router, Link, Indexroute, Route, hashHistory} from 'react-router'

import Home from './components/Home/Home'
import JokeGrid from './components/JokeGrid/JokeGrid'

render((
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
      <Route path='/jokes' component={JokeGrid} />
    </Route>
  </Router>
), document.querySelector('.application'));
