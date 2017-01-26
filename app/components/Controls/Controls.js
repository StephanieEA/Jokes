import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from '../../components/Button/Button'
import JokeNumber from '../../components/Input/JokeNumber'


export default class Controls extends Component {
  render(){
    return (
      <div>
        <Button className='new-jokes'
              text={<Link to='/jokes'>New Jokes</Link>}
              onClick={this.props.getRandom}/>
        <JokeNumber
          onChange={this.props.handleNumber}
          value={this.props.number}/>
        <Button className='favorites'
              text='Favorites'
              // onClick={this.getRandomName.bind(this)}
        />
      </div>
    )
  }
}
