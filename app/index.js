import React from 'react'
import { render } from 'react-dom'
import {Router, IndexRoute, Route, browserHistory} from 'react-router'

import Home from './components/Home/Home'
import JokeGrid from './components/JokeGrid/JokeGrid'
import Settings from './components/Settings/Settings'
import Favorites from './components/Favorites/favorites'
import App from './components/App/App'

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Home}/>
      <Route path='/settings' component={Settings}/>
      <Route path='/jokes' component={JokeGrid} />
      <Route path='/favorites' component={Favorites}/>
    </Route>
  </Router>
), document.querySelector('.application'));
