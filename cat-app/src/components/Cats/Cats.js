import React, { useState } from 'react';
import './Cats.css';

const axios = require('axios');

export default function Cats() {
  // setSate for the api response
  const [ catPicture, setCatPicture ] = useState();

  // Without the e as a parameter in helloClick the api is called without a click. called twice.
  // response.data[0].url is the cat
  function helloClick() {
    console.log("Hello")
    axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:10}})
      .then((response) => {
        const CatPictureURL = response.data[0].url;
        setCatPicture(CatPictureURL);
        console.log(CatPictureURL)
      })
      .catch((error) => {
        console.log("Error")
      })
  }

  // need to create a function to call in the onClick

  return(
    <div>
      <h2>Cats</h2>
      <img src={catPicture} className="cat" alt="Cat"/>
      <button onClick={helloClick}>Cat Search</button>

    </div>
  );
}