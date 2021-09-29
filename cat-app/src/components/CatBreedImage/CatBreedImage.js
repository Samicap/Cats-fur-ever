import { useState } from "react";
import axios from "axios";

export default function CatBreedImage (cat_id) {
  const [ catImage, setCatImage] = useState();

  let image_id = cat_id.cat_id;


  let apiURL = `https://api.thecatapi.com/v1/images/search`;
  let apiKey = process.env.REACT_APP_CAT_API_KEY;

  let headers = {
    headers: {
      Authorization: `${apiKey}`,
    }
  }

  let params = {
    params: {
      limit: 1,
      breed_id: `${image_id}`
    }
  }

  axios
  .get(apiURL, params, headers,
  )
  .then((response) => {
    console.log("catbreedImage", response.data[0].url);
    // setCatImage(response.data[0].url)
  })
  .catch((error) => {
    console.log("Error, ", error);
  });

  return (
    <div>
    <p>hi</p>
    </div>
  )
}