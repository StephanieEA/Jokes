import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import '../../styles'

import Header from '../../components/Header/Header';
import RandomJoke from '../../components/RandomJoke/RandomJoke';
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
    if(e.target.value === NaN || e.target.value === 0) {
      this.setState({number: 1})
    }
    this.setState({number: 1 + parseInt(e.target.value)})
    }


  handleName (e) {
    const fullName = e.target.value.split(' ')
    this.setState({firstName: fullName[0] || e.target.value})
    this.setState({lastName: fullName[1] || ''})
  }

  toggleParentControl() {
    this.setState({parentControl: !this.state.parentControl})
    getRandom(this.state.parentControl, this.state.number, this.state.firstName, this.state.lastName, this.setStateAfterCall.bind(this))
  }

  renderSettings () {
    this.state.renderControls = !this.state.renderControls
  }

  makeFavorite(id) {
    const fave = this.state.jokes.find(joke => joke.id === id)
    fave.favorite = true
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
      toggleParentControl: this.toggleParentControl.bind(this),
      reset: this.reset.bind(this),
      makeFavorite: this.makeFavorite.bind(this),
      number: this.state.number,
      parentControl: this.state.parentControl,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      setState: this.setStateAfterCall.bind(this),
      renderSettings: this.renderSettings.bind(this),
      renderControls: this.state.renderControls,
      }
    )

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
