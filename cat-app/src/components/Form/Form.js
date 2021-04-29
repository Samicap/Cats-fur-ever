import axios from 'axios';
import React from 'react';
import './Form.css';

require('dotenv').config();

export default function Form() {

  const [breed, setBreed] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    let apiKey = process.env.REACT_APP_TEST
    // breed needs to be the user Input
    let breed = "";
    let apiURL = "https://api.thecatapi.com/v1/breeds/images/search?q={breed}";
    axios.post(apiURL, {
      headers: {
        'Authorization': `key ${apiKey}`
      }

    })
    alert("you have submitted the form")
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