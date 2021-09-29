import React from "react";
import { Link } from "react-router-dom";

const axios = require("axios");

export default function Dashboard() { 
  // function fetchUserFavoritePictures() {
  //   let query = {
  //     sub_id: "User-123",
  //     limit: "10",
  //     page: "1",
  //   };

  //   let headers = {
  //     "x-api-key": process.env.REACT_APP_CAT_API_KEY,
  //     "content-type": "application/json",
  //   };

  //   axios
  //     .get("https://api.thecatapi.com/v1/favourites", query,
  //       headers)
  //     .then((response) => {
  //       console.log(
  //         "Response from axios call to fetch user favorites from api",
  //         response
  //       );
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching user's favorite cat pictures: ", error);
  //     });
  // }

  function getCategories() {
    let query = {
      limit: 10,
      page: 1
    }
    axios
    .get("https://api.thecatapi.com/v1/categories", query)
    .then((response) => {
      console.log("getCategories Response: ", response)
    })
    .catch((error) => {
      console.log("getCategories Error: ", error)
    })
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/form">Click here to search for cat breeds </Link>
      <button onClick={getCategories}>
        Click here to fetch favorites!
      </button>
    </div>
  );
}
