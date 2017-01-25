import React from 'react'
import { render } from 'react-dom'
import {Router, Link, IndexRoute, Route, browserHistory} from 'react-router'

import Home from './components/Home/Home'
import JokeGrid from './components/JokeGrid/JokeGrid'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
      <Route path='/jokes' component={JokeGrid} />
      <IndexRoute component={JokeGrid}/>
    </Route>
  </Router>
), document.querySelector('.application'));
