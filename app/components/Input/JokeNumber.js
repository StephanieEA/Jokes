import React from 'react';
import './input-style';

const JokeNumber = ({onChange, value}) => {
  return (
    <input type='number'
           placeholder='5'
           onChange={onChange}>
    </input>
  )
}

export default JokeNumber;
