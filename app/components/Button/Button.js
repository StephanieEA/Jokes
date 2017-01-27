import React from 'react';

import { Link } from 'react-router'

import './button-style'

const Button = ({ text, onClick, className, id, targetPath}) => {
  return (
    <button onClick={onClick}
            aria-label={text}
            className={className}>
      <Link to={targetPath}>{text}</Link>
    </button>
  );
}

export default Button;
