import React, { Component } from 'react'

import './joke-grid-style';

export default class JokeGrid extends Component {
  render () {
    return (
      <section>
        <p className='random'> bad joke 1</p>
        <p className='random'>bad joke 2</p>
        <p className='random'> bad joke 3</p>
      </section>
    )
  }
}
