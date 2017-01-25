import React from 'react';

const JokeNumber = ({number, onChange, value}) => {
  return (
    <input type='number'
           placeholder={number}
           onChange={onChange}>
    </input>
  )
}

export default JokeNumber;
