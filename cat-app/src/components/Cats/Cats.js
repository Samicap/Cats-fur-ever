import React from 'react';

const axios = require('axios');

export default function Cats() {

  axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full"}})
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log("Error")
    })
  return(
    <div>
      <h2>Cats</h2>
      <button>Cat Search</button>

    </div>
  );
}