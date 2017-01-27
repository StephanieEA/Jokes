import React, { Component } from 'react';
import { Link } from 'react-router'

import './button-style'

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}
              aria-label={this.props.text}
              id={this.props.id}
              className={this.props.className}>
        <Link to={this.props.targetPath}>{this.props.text}</Link>
      </button>
    )
  }
}

// Button.propTypes = {
//   onClick: React.PropTypes.func,
//   text: React.PropTypes.string,
//   clas: React.PropTypes.string,
//   src: React.PropTypes.string,
// }
