import React from 'react';

const axios = require('axios');

export default function Cats() {
  function helloClick(e) {
    console.log("Hello")
  }

  // need to create a function to call in the onClick

  axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full"}})
    .then((response) => {
      console.log(response.data)
    })
    .catch((error) => {
      console.log("Error")
    })
  return(
    <div>
      <h2>Cats</h2>
      <button onClick={helloClick}>Cat Search</button>

    </div>
  );
}