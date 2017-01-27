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

export default class App extends Component {
  constructor() {
    super()
    this.defaultState = {
          number: 1,
          joke: '',
          jokes: [],
          firstName: 'Chuck',
          lastName: 'Norris',
          parentControl: false,
          renderControls: true,}
    this.state = this.defaultState;
  }

  componentDidMount() {
    this.getRandom()
  }
//To do : refactor and move this out of App
  getRandom () {
      if (!this.state.parentControl) {
        fetch(`https://api.icndb.com/jokes/random/${this.state.number}/?firstName=${this.state.firstName}&lastName=${this.state.lastName}&escape=javascript`, {method: 'GET'},)
          .then(response => response.json())
          .then(jsoned => {
            const values = Array.from(jsoned.value)
            const modified = values.forEach(value => {
              Object.assign(value, {favorite: false})
            })
            console.log(values)
            this.setState({joke: values[0].joke})
            this.setState({jokes: values.slice(1)})
        })
      } else {
        fetch(`https://api.icndb.com/jokes/random/${this.state.number}/?firstName=${this.state.firstName}&lastName=${this.state.lastName}&escape=javascript&exclude=[explicit]`, {method: 'GET'},)
          .then(response => response.json())
          .then(jsoned => {
            const values = Array.from(jsoned.value)
            const modified = values.forEach(value => {
              Object.assign(value, {favorite: false})
            })
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
//  To do- refactor- probably not a necessary function
  renderSettings () {
    this.state.renderControls = !this.state.renderControls
  }

  makeFavorite(id) {
    const fave = this.state.jokes.find(joke => joke.id === id)
    fave.favorite = true
  }

  reset() {
    this.state = this.defaultState
    this.getRandom()
    this.setState({renderControls: false})
  }


  render () {
     const roar = React.cloneElement(this.props.children, {
      jokes: this.state.jokes,
      handleName: this.handleName.bind(this),
      getRandom: this.getRandom.bind(this),
      handleOnParentControl: this.handleOnParentControl.bind(this),
      handleOffParentControl: this.handleOffParentControl.bind(this),
      reset: this.reset.bind(this),
      makeFavorite: this.makeFavorite.bind(this),
    })

  return (
      <section>
        <Header  renderSettings={this.renderSettings.bind(this)}
                 renderControls={this.state.renderControls}/>
        <RandomJoke text={this.state.joke}/>
        {this.state.renderControls ?
          <Controls getRandom={this.getRandom.bind(this)}
                    handleNumber={this.handleNumber.bind(this)}
                    number={this.state.number}
          /> : ''}
          {roar}
      </section>
    );
  }
}
