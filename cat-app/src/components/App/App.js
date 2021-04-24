import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';import Dashboard from '../Dashboard/Dashboard';
import './App.css';
import Login from '../Login/Login';
// import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Cats from '../Cats/Cats';
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/cats">
            <Cats />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
