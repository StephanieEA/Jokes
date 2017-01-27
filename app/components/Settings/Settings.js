import React, { Component } from 'react'

import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

export default class Settings extends Component {
  render() {
    return (
      <section className='settings-rte'>
        Set Name:
        <Input className='set-name' type='text' onChange={this.props.handleName}/>
        <Button text='SET'
                onClick={() => {
                  this.props.getRandom(this.props.parentControl, this.props.number, this.props.firstName, this.props.lastName, this.props.setState)}}/>
        <Button text='RESET'
                onClick={this.props.reset}/>
        <br/>
          Parental Controls:  On:
          <Input type="radio"
                 onChange={this.props.toggleParentControl}
                 value={true}
                 checked={this.props.parentControl === true}
                 disabled={this.props.parentControl === true}
               />
          Off:
          <Input type="radio"
                 onChange={this.props.toggleParentControl}
                 value={false}
                 checked={this.props.parentControl === false}
                 disabled={this.props.parentControl === false}
               />
      </section>
    )
  }
}
