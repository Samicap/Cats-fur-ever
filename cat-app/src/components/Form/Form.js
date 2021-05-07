import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Form.css';

require('dotenv').config();

export default function Form() {

  const [breed, setBreed] = useState('');
  // is useState automatically set to be an array?
  // const [apiData, setApiData] = useState([]) did NOT work.  the apiData.map in the render was not a function.
  const [apiData, setApiData] = useState([]);
  


    const handleSubmit = event => {
    event.preventDefault();
    let apiKey = process.env.REACT_APP_CAT_API_KEY
    let apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
    // Issue now: the cat API will only look up a breed with this code with the first 4 letters.
    // Do i need to make the send with only the 1st four letters?  Or search by name in APi?

    // Should i add a spinner image to show while data is being fetched?
  
      axios.get(apiURL, {
        headers: {
          'Authorization': `key ${apiKey}`
        }
      })
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.log("Error, ", error)
      })
  }


  return(
    <div className="wrapper">
      <h1>Find a Cat Breed</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Enter Breed Name</p>
            <input name="breed" onChange={event => setBreed(event.target.value)} />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <h1>Cat API Response</h1>

       {apiData.map((cat) => {
         return   <p key="cat">{JSON.stringify(cat)}</p>
       }
        
      )}
    </div>
  )
}