import React from 'react';

const getRandom = (parentControl, number, firstName, lastName, setState) => {
    if (!parentControl) {
      fetch(`https://api.icndb.com/jokes/random/${number}/?firstName=${firstName}&lastName=${lastName}&escape=javascript`, {method: 'GET'},)
        .then(response => response.json())
        .then(jsoned => {
          const values = Array.from(jsoned.value)
          values.forEach(value => {
            Object.assign(value, {favorite: false})
          })
          console.log(values)
          setState(values[0].joke, values.slice(1))
      })
    } else {
      fetch(`https://api.icndb.com/jokes/random/${number}/?firstName=${firstName}&lastName=${lastName}&escape=javascript&exclude=[explicit]`, {method: 'GET'},)
        .then(response => response.json())
        .then(jsoned => {
          const values = Array.from(jsoned.value)
          values.forEach(value => {
            Object.assign(value, {favorite: false})
          })
          console.log(values)
          setState(values[0].joke, values.slice(1))
        })
    }
}

export default getRandom;
