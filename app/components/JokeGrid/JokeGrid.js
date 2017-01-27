import React, { Component } from 'react'

import  Button from '../../components/Button/Button'
import './joke-grid-style';

export default class JokeGrid extends Component {
// should probably make a separate commponent that does the rendering, taking an array argument, that is used here and in favorites
  render () {
    let jokes = this.props.jokes

    jokes = jokes.map((jk, index) =>
       (<p key={index}
          className='random'>
          {jk.joke}
         <Button onClick={() => this.props.makeFavorite(jk.id)}
         className='favorite-btn' id={jk.id} text='&#9734;' />
       </p>)
      )

    return (
      <section>
        {jokes}
      </section>
    )
  }
}
