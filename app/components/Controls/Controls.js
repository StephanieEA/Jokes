import React, { Component } from 'react'
import { Link } from 'react-router'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'


export default class Controls extends Component {
  render() {
    return (
      <div>
        <Button className='new-jokes'
                targetPath='/jokes'
                text="New Jokes"
                onClick={() => {
                this.props.getRandom(this.props.parentControl, this.props.number, this.props.firstName, this.props.lastName, this.props.setState)}}/>
        <Input
          onChange={this.props.handleNumber}
          value={this.props.number - 1}/>
        <Button
              className='favorites'
              text="Favorites"
              targetPath='/favorites'
              onClick={()=>{this.props.renderSettings()}}/>
      </div>
    )
  }
}
