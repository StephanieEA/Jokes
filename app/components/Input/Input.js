import React from 'react';
import './input-style';

const Input = ({onChange, value, placeholder, type, className, checked, disabled}) => (
  <input  type={type}
          onChange={onChange}
          value={value}
          className={className}
          checked={checked}
          disabled={disabled}/>
)

export default Input;
