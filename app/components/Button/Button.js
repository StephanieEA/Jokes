import React from 'react';

import './button-style'

const Button = ({ text, onClick, className}) => {
  return (
    <button onClick={onClick}
            aria-label={text}
            className={className}>
      {text}
    </button>
  );
}

export default Button;
