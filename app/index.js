import React from 'react'
import { render } from 'react-dom'
import {Router, Link, IndexRoute, Route, browserHistory} from 'react-router'

import Home from './components/Home/Home'
import JokeGrid from './components/JokeGrid/JokeGrid'
import Settings from './components/Settings/Settings'
import Favorites from './components/Favorites/favorites'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Home}>
    {/* <IndexRoute component={Home}/> */}
      <Route path='/settings' component={Settings}/>
      <IndexRoute component={Settings}/>
      <Route path='/jokes' component={JokeGrid} />
      <IndexRoute component={JokeGrid}/>
      <Route path='/favorites' component={Favorites}/>
      <IndexRoute component={Favorites}/>
    </Route>
  </Router>
), document.querySelector('.application'));
