import React, { Component } from 'react'

import './joke-grid-style';

export default class JokeGrid extends Component {

  renderNewJokes(array) {
    const jokeArray = array.map((jk, index) =>
    <p key={index} className='random'>{jk.joke}
      <span>&#9734;</span>
    </p>
    );
    return jokeArray
  }

  render () {
    const jokes = this.renderNewJokes(this.props.jokes)
    return (
      <section>
        {jokes}
      </section>
    )
  }
}
