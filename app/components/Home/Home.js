import React, { Component } from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import '../../styles';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import RandomJoke from '../../components/RandomJoke/RandomJoke';
import JokeNumber from '../../components/Input/JokeNumber';
import JokeGrid from '../../components/JokeGrid/JokeGrid';
//import apiRequest from '../../components/Helpers/apiRequest';

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      url: 'https://api.icndb.com/jokes/random/?escape=javascript',
      number: 1,
      joke: '',
      jokes: ['a', {}],
    }
  }

  componentDidMount() {
    this.getRandom()
  }

  getRandom () {
      fetch('https://api.icndb.com/jokes/random/' + this.state.number + '/?escape=javascript', {method: 'GET'},)
        .then(response => response.json())
        .then(jsoned => {
          const values = Array.from(jsoned.value)
          console.log(values)
          this.setState({joke: values[0].joke})
          this.setState({jokes: values})
        })
  }

  handleNumber (e) {
    this.setState({number: e.target.value})
  }

  render () {
  return (
      <section>
        <Header/>
        <RandomJoke text={this.state.joke}/>
        <Button className='new-jokes'
              text={<Link to='/jokes'>new jokes</Link>}
            //  onClick={() => this.renderNewJokes(this.state.jokes)}
            />
        <JokeNumber onChange={this.handleNumber.bind(this)}/>
        <Button className='favorites'
              text='favorites'
              onClick={()=> this.getRandom(this.state.url)}/>
            {React.cloneElement(this.props.children, {jokes: this.state.jokes})}
      </section>
    );
  }
}
