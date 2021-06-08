import React, { useState } from "react";
import "./Cats.css";

const axios = require("axios");

export default function Cats() {
  // setSate for the api response
  const [catPicture, setCatPicture] = useState();

  // Without the e as a parameter in helloClick the api is called without a click. called twice.
  // response.data[0].url is the cat
  function helloClick() {
    axios
      .get("https://api.thecatapi.com/v1/images/search", {
        params: { limit: 1, size: 10 },
      })
      .then((response) => {
        const CatPictureURL = response.data[0].url;
        setCatPicture(CatPictureURL);
        console.log("API Response: ", response.data[0]);
        console.log(CatPictureURL);
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  // need to create a function to call in the onClick

  return (
    <div className="random-cat-setup">
      <h2 className="cat-picture-title">
        Hit the button to see another random cat picture!
      </h2>
      <span className="button-container">
        <button onClick={helloClick} className="random-cat-search-button">
          Cat Search
        </button>
        <button className="favorite-button">Favorite</button>
      </span>
      <img src={catPicture} className="cat-picture" alt="Cat" />
    </div>
  );
}
