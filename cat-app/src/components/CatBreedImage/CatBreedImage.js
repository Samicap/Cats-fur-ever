import { useState, useEffect } from "react";
import axios from "axios";
import './CatBreedImage.css';

export default function CatBreedImage (cat_id) {
  const [ catPicture, setCatPicture] = useState("");

  let cat_breed_id = cat_id.cat_id;

  let apiURL = `https://api.thecatapi.com/v1/images/search`;
  let apiKey = process.env.REACT_APP_CAT_API_KEY;

  let headers = {
    headers: {
      Authorization: `${apiKey}`,
    }
  }

  useEffect(() => {

    function requestCatPicture(cat_breed_id) {
      axios
      .get(apiURL, {params: {limit: 1, breed_id: `${cat_breed_id}`}}, headers,
      )
      .then((response) => {
        console.log("axios call", response.data[0].url)
        setCatPicture(response.data[0].url)
      })
      .catch((error) => {
        console.log("Error, ", error);
        return ""
      });
    }

    requestCatPicture(cat_breed_id);
    // function requestCatPicture(cat_breed_id) {
    //   axios
    //   .get(apiURL, {params: {limit: 1, breed_id: `${cat_breed_id}`}}, headers,
    //   )
    //   .then((response) => {
    //     console.log(response.data[0].url)
    //     return response.data[0].url
    //   })
    //   .catch((error) => {
    //     console.log("Error, ", error);
    //     return ""
    //   });
    // }
  }, [cat_breed_id]);

  // let params = {
  //   params: {
  //     limit: 1,
  //     breed_id: `${cat_breed_id}`
  //   }
  // }

  // let url = requestCatPicture(cat_breed_id)
  //setCatPicture(url)

  return (
    <div>
      <img src={catPicture} className="cat-pic" alt="Cat"></img>
    </div>
  )
}