import React from 'react';

const JokeNumber = ({onChange, value}) => {
  return (
    <input type='number'
           placeholder='1'
           onChange={onChange}>
    </input>
  )
}

export default JokeNumber;
