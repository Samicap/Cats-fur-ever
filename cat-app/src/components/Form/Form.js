import axios from 'axios';
import React, { useState } from 'react';
import './Form.css';

require('dotenv').config();

export default function Form() {

  const [breed, setBreed] = useState('');
  const [apiData, setApiData] = useState([]);
  
  const handleSubmit = event => {
    event.preventDefault();
    let apiKey = process.env.REACT_APP_CAT_API_KEY
    // breed needs to be the user Input
    let apiURL = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
    axios.get(apiURL, {
      headers: {
        'Authorization': `key ${apiKey}`
      }
    })
    .then((response) => {
      setApiData(response);
      // issue: this isn't being logged unless the submit button is hit twice
      console.log("line 25", apiData)
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
    </div>
  )
}