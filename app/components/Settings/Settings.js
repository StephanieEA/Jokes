import React, { Component } from 'react'

import Button from '../../components/Button/Button'

export default class Settings extends Component {

  render () {
    return (
      <section>
        Set Name:
        <input className='set-name' type='text' onChange={this.props.handleName}></input>
        <Button text='SET'
                onClick={() => {
                  this.props.getRandom(this.props.parentControl, this.props.number, this.props.firstName, this.props.lastName, this.props.setState)}}/>
        <Button text='RESET'
                onClick={this.props.reset}
        />
        <br/>
        Parental Controls:
        On: <input type="radio" onClick={this.props.handleOnParentControl}/>
        Off: <input type="radio" onClick={this.props.handleOffParentControl}/>
      </section>
    )
  }
}
