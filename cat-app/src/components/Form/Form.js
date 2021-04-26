import React from 'react';
import './Form.css';

export default function Form() {

  return(
    <div className="wrapper">
      <h1>Find a Cat Breed</h1>
      <form>
        <fieldset>
          <label>
            <p>Enter Breed Name</p>
            <input name="breed" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}