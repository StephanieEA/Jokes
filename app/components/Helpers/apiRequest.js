import React from 'react';

const myInit = {
  method: 'GET',
}

const apiRequest = () => {
  fetch('https://api.icndb.com/jokes/random', myInit)
    .then(response => response.json())
    .then(jsoned => {
    const joke = jsoned.value.joke;
    console.log(joke)
    return joke
  })
}

export default apiRequest;

//  for no explicit jokes
// http://api.icndb.com/jokes/random?exclude=[nerdy,explicit]
//  for one random joke
// http://api.icndb.com/jokes/random
// for multiple random jokes
