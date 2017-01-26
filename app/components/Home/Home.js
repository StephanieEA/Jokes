import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import '../../styles'

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import RandomJoke from '../../components/RandomJoke/RandomJoke';
import JokeNumber from '../../components/Input/JokeNumber';
import JokeGrid from '../../components/JokeGrid/JokeGrid';
import Controls from '../../components/Controls/Controls';
//import apiRequest from '../../components/Helpers/apiRequest';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
    //  url: 'https://api.icndb.com/jokes/random/?escape=javascript',
      number: 1,
      joke: '',
      jokes: [],
      firstName: 'Chuck',
      lastName: 'Norris',
      parentControl: false,
      renderControls: true,
    }
  }

  componentDidMount() {
    this.getRandom()
  }

  getRandom () {
      if (!this.state.parentControl) {
        fetch(`https://api.icndb.com/jokes/random/${this.state.number}/?firstName=${this.state.firstName}&lastName=${this.state.lastName}&escape=javascript`, {method: 'GET'},)
          .then(response => response.json())
          .then(jsoned => {
            const values = Array.from(jsoned.value)
            console.log(values)
            this.setState({joke: values[0].joke})
            this.setState({jokes: values.slice(1)})
        })
      } else {
        fetch(`https://api.icndb.com/jokes/random/${this.state.number}/?firstName=${this.state.firstName}&lastName=${this.state.lastName}&escape=javascript&exclude=[explicit]`, {method: 'GET'},)
          .then(response => response.json())
          .then(jsoned => {
            const values = Array.from(jsoned.value)
            console.log(values)
            this.setState({joke: values[0].joke})
            this.setState({jokes: values.slice(1)})
          })
      }
  }

  handleNumber (e) {
    this.setState({number: 1 + parseInt(e.target.value)})
  }

  handleName (e) {
    const fullName = e.target.value.split(' ')
    this.setState({firstName: fullName[0] || e.target.value})
    this.setState({lastName: fullName[1] || e.target.value})
  }

  handleOnParentControl (e) {
    this.setState({parentControl: true})
  }

  handleOffParentControl (e) {
    this.setState({parentControl: false})
  }

  renderControlsCheck () {
    this.state.renderControls = !this.state.renderControls
  }

  render () {
  return (
      <section>
        <Header  renderControlsCheck={this.renderControlsCheck.bind(this)}/>
        <RandomJoke text={this.state.joke}/>
        {/* controls should be a component in home that's replaced by settings */}
        {this.state.renderControls ?
          <Controls getRandom={this.getRandom.bind(this)}
                    handleNumber={this.handleNumber.bind(this)}
                    number={this.state.number}
          /> : ''}
        {React.cloneElement(this.props.children, {
          jokes: this.state.jokes,
          handleName: this.handleName.bind(this),
          getRandom: this.getRandom.bind(this),
          handleOnParentControl: this.handleOnParentControl.bind(this),
          handleOffParentControl: this.handleOffParentControl.bind(this),
        })}
      </section>
    );
  }
}
