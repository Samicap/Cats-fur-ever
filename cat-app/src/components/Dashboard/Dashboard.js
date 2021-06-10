import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return(
    <div>
      <h2>Dashboard</h2>
      <Link to="/form" >Click here to search for cat breeds </Link>
      <button>Click here to fetch favorites!</button>
    </div>
  );
}