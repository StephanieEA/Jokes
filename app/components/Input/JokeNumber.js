import React from 'react';
import './input-style';

const JokeNumber = ({onChange, value}) => {
  // make reusable input component to use in controls and settings..  JokeNumber is unecessary
  return (
    <input type='number'
           placeholder='5'
           onChange={onChange}>
    </input>
  )
}

export default JokeNumber;
