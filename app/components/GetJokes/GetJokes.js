import React from 'react';
import '../../styles';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import RandomJoke from '../../components/RandomJoke/RandomJoke';
import JokeNumber from '../../components/Input/JokeNumber';
import JokeGrid from '../../components/JokeGrid/JokeGrid';
import apiRequest from '../../components/Helpers/apiRequest';

const GetJokes = () => {
  apiRequest()
  return (
    <section>
      <Header/>
      <RandomJoke random='bad joke'/>
      <Button className='new-jokes'
              text='new jokes'
              onClick={()=> console.log('click new jokes')}/>
      <JokeNumber number = '3'
                  onChange={() => console.log('type number')}/>
      <Button className='favorites'
              text='favorites'
              onClick={()=> console.log('click favorites')}/>
      <JokeGrid/>
    </section>
  );
}

export default GetJokes;
