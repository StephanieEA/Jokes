import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import '../../styles'

import Header from '../../components/Header/Header';
//import Button from '../../components/Button/Button';
import RandomJoke from '../../components/RandomJoke/RandomJoke';
//import JokeNumber from '../../components/Input/JokeNumber';
import JokeGrid from '../../components/JokeGrid/JokeGrid';
import Controls from '../../components/Controls/Controls';
import getRandom from '../../components/Helpers/apiRequest';

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
    getRandom(this.state.parentControl, this.state.number, this.state.firstName, this.state.lastName, this.setStateAfterCall.bind(this))

  }

  setStateAfterCall (joke, jokes) {
  this.setState({ joke, jokes })
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

  renderSettings () {
    this.state.renderControls = !this.state.renderControls
    console.log('yo')
  }

  makeFavorite(id) {
    const fave = this.state.jokes.find(joke => joke.id === id)
    fave.favorite = true

    // change the text on the button... could add class that change
//    fave.classList.add('active')
// maybe it doesn't heed to be here, but jokess that have jokes.favorite have an additional class...  render those jokes with an additional class

    // console.log(document.querySelector('.favorite-btn'))
    // console.log(document.querySelector('id'))
  }

  reset() {
    this.state = this.defaultState
    getRandom(this.state.parentControl, this.state.number, this.state.firstName, this.state.lastName, this.setStateAfterCall.bind(this))
    this.setState({renderControls: false})
  }


  render () {
     const roar = React.cloneElement(this.props.children, {
      jokes: this.state.jokes,
      handleName: this.handleName.bind(this),
      getRandom: getRandom.bind(this),
      handleOnParentControl: this.handleOnParentControl.bind(this),
      handleOffParentControl: this.handleOffParentControl.bind(this),
      reset: this.reset.bind(this),
      makeFavorite: this.makeFavorite.bind(this),
      number: this.state.number,
      parentControl: this.state.parentControl,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      setState: this.setStateAfterCall.bind(this),
      renderSettings: this.renderSettings.bind(this),
      renderControls: this.state.renderControls,
    })

  return (
      <section>
        <Header  renderSettings={this.renderSettings.bind(this)}
                 renderControls={this.state.renderControls}/>
        <RandomJoke text={this.state.joke}/>
        {this.state.renderControls ?
          <Controls
                    getRandom={getRandom.bind(this)}
                    handleNumber={this.handleNumber.bind(this)}
                    number={this.state.number}
                    parentControl={this.state.parentControl}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    setState={this.setStateAfterCall.bind(this)}
                    renderControls={this.state.renderControls}
                    renderSettings={this.renderSettings.bind(this)}
                    makeFavorite= {this.makeFavorite.bind(this)}

          /> : ''}
          {roar}
      </section>
    );
  }
}
