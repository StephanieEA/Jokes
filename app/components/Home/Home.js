import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import '../../styles';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import RandomJoke from '../../components/RandomJoke/RandomJoke';
import JokeNumber from '../../components/Input/JokeNumber';
import JokeGrid from '../../components/JokeGrid/JokeGrid';
import apiRequest from '../../components/Helpers/apiRequest';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      jokes: [],
      randomJoke: ''
    }
  }

  render () {
  apiRequest()
  return (
      <section>
        <Header/>
        <RandomJoke random='bad joke'/>
        <Button className='new-jokes'
              text={<Link to='/jokes'>new jokes</Link>}
              onClick={()=> console.log(this.props)}/>
        <JokeNumber number = '3'
                  onChange={() => console.log('type number')}/>
        <Button className='favorites'
              text='favorites'
              onClick={()=> console.log('click favorites')}/>
        {this.props.children}
      </section>
    );
  }
}
