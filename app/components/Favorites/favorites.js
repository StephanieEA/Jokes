import React, { Component } from 'react'

import Button from '../../components/Button/Button'


export default class Favorites extends Component {
  render () {
    let jokes = this.props.jokes.filter(joke => joke.favorite === true)
    if (jokes.length === 0) {
      jokes = "You don't have any faves."
    } else {
      jokes = jokes.map((jk, index) =>
         (<p key={index}
            id={jk.id}
            className='random'>
            {jk.joke}
           <Button onClick={() => this.props.makeFavorite(jk.id)}
           className='favorite-btn' text='&#9734;' />
         </p>)
        )
    }
    return (
      <section>
        {jokes}
      </section>
    )
  }
}
