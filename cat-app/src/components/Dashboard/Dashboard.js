import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  
  function fetchUserFavoritePictures() {

    let query = {
      sub_id: "User-123",
      limit: 10
    }

    let headers = {
      "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      "content-type": "application/json"
  }

    axios
      .get("https://api.thecatapi.com/v1/favourites", query, {headers: headers})
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log("Error fetching user's favorite cat pictures: ", error)
      })
  } 

  return(
    <div>
      <h2>Dashboard</h2>
      <Link to="/form" >Click here to search for cat breeds </Link>
      <button>Click here to fetch favorites!</button>
    </div>
  );
}