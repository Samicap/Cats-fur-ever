import React from 'react';

const axios = require('axios');

export default function Cats() {

  let picture = "";

  // Without the e as a parameter in helloClick the api is called without a click. called twice.
  // response.data[0].url is the cat
  function helloClick() {
    console.log("Hello")
  }

  // need to create a function to call in the onClick

  axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full"}})
    .then((response) => {
      picture = response.data[0].url;
      console.log(picture)
    })
    .catch((error) => {
      console.log("Error")
    })
  return(
    <div>
      <h2>Cats</h2>
      <img src="https://cdn2.thecatapi.com/images/a1r.jpg"/>
      <button onClick={helloClick}>Cat Search</button>

    </div>
  );
}