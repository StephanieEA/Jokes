import React from 'react';

const myInit = {
  method: 'GET',

}

const apiRequest = () => {
  fetch('https://api.icndb.com/jokes', myInit)
    .then(response => response.json())
    .then(jsoned => {
    const jokeArray = Array.from(jsoned.value);
    const random =
    console.log(jokeArray)
  })
}

export default apiRequest;

//  for no explicit jokes
// http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]
//  for one random joke
// http://api.icndb.com/jokes/random
// for multiple random jokes
// http://api.icndb.com/jokes/random/3
