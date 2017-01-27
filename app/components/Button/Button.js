import React from 'react';

import { Link } from 'react-router'

import './button-style'

// const Button = ({ text, onClick, className, id, targetPath}) => {
//   return (
//     <button onClick={onClick}
//             aria-label={text}
//             id={id}
//             className={className}>
//       <Link to={targetPath}>{text}</Link>
//     </button>
//   );
// }

//export default Button;


export default class Button extends React.Component{
//   constructor(props) {
//   super(props);
//   this.state = {active: false};
// }

//  toggleActive() {
//    (if this.props.onClick === )
//  }

  render(){

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
