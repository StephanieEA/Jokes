import React, { Component } from 'react'

import './joke-grid-style';

export default class JokeGrid extends Component {

  renderNewJokes(array) {
    const jokeArray = array.map((jk, index) =>
    <p key={index} className='random'>{jk.joke}</p>
    );
    return jokeArray
  }

  render () {
    const jokes = this.renderNewJokes(this.props.jokes)
    return (
      <section>
        {jokes}
        <p className='random'> bad joke 1</p>
        <p className='random'>bad joke 2</p>
        <p className='random'> bad joke 3</p>
      </section>
    )
  }
}
