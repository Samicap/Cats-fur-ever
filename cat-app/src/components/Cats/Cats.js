import React, { useState } from "react";
import "./Cats.css";



const axios = require("axios");

export default function Cats() {
  // setSate for the api response
  const [catPicture, setCatPicture] = useState();
  const [catPictureId, setCatPictureId] = useState();

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
        setCatPictureId(response.data[0].id);
        console.log("API Response: ", response.data[0]);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  function favoriteClick() {
    let postBody = {
      image_id: catPictureId,
      sub_id: "User-123",
    };

    let headers = {
      "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      "content-type": "application/json",
    };

    axios
      .post("https://api.thecatapi.com/v1/favourites", postBody, {
        headers: headers,
      })
      .then((response) => {
        console.log("response from favorite post request", response);
      })
      .catch((error) => {
        console.log("Error while posting to favorites: ", error);
      });
    console.log("Cat Picture Id: ", catPictureId);
  }

  function fetchUserFavoritePictures() {
    let query = {
      sub_id: "User-123",
      limit: "10",
      page: "1",
    };

    let headers = {
      "x-api-key": "9b9e95d6-e743-4bc2-b090-b25f081c0a90",
      "content-type": "application/json",
    };

    axios
      .get("https://api.thecatapi.com/v1/favourites", query,
        headers)
      .then((response) => {
        console.log(
          "Response from axios call to fetch user favorites from api",
          response
        );
      })
      .catch((error) => {
        console.log("Error fetching user's favorite cat pictures: ", error);
      });
  }

  return (
    <div className="random-cat-setup">
      <h2 className="cat-picture-title">
        Hit the button to see another random cat picture!
      </h2>
      <span className="button-container">
        <button onClick={helloClick} className="random-cat-search-button">
          Cat Search
        </button>
        <button onClick={favoriteClick} className="favorite-button">
          Favorite
        </button>
        <button onClick={fetchUserFavoritePictures}>Fetch Favorite Pics</button>
      </span>
      <img src={catPicture} className="cat-picture" alt="Cat" />
    </div>
  );
}
