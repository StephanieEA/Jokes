import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import '../../styles'

import Header from '../../components/Header/Header';
import RandomJoke from '../../components/RandomJoke/RandomJoke';
import Controls from '../../components/Controls/Controls';
//import apiRequest from '../../components/Helpers/apiRequest';

export default class Home extends Component {
  render () {
  return (
      <section>
        {/* <Header  renderSettings={this.renderSettings.bind(this)}
                 renderControls={this.state.renderControls}/>
        <RandomJoke text={this.state.joke}/>
        {this.state.renderControls ?
          <Controls getRandom={this.getRandom.bind(this)}
                    handleNumber={this.handleNumber.bind(this)}
                    number={this.state.number}
          /> : ''} */}
      </section>
    );
  }
}
