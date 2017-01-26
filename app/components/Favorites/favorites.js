import React, { Component } from 'react'


export default class Favorites extends Component {

  renderFavoriteJokes(array) {
    const jokeArray = array.map((jk, index) =>
    <p key={index} className='random'>{jk.joke}
      <span>&#9734;</span>
    </p>
    );
    return jokeArray
  }

  render () {
    const jokes = this.renderFavoriteJokes(this.props.jokes)
    return (
      <section>
        {jokes}
      </section>
    )
  }
}
