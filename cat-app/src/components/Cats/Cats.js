import React, { useState } from "react";
import "./Cats.css";

const axios = require("axios");
require("dotenv").config();

export default function Cats() {
  // setSate for the api response
  const [catPicture, setCatPicture] = useState();
  const [catPictureId, setCatPictureId] = useState();
  let apiKey = process.env.REACT_APP_CAT_API_KEY;
  let appleKey=process.env.REACT_APP_APPLE;
  console.log(appleKey)

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
        setCatPictureId(response.data[0].id)
        console.log("API Response: ", response.data[0]);
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  function favoriteClick() {
    axios
      .post("https://api.thecatapi.com/v1/favourites", {image_id: catPictureId, sub_id: "User-123"}, {
        headers: {"x-api-key": `key ${apiKey}`}
      })
      console.log("apple", catPictureId)
      console.log(apiKey)
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
        <button onClick={favoriteClick} className="favorite-button">Favorite</button>
      </span>
      <img src={catPicture} className="cat-picture" alt="Cat" />
    </div>
  );
}
