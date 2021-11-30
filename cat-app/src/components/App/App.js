import React from "react";
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
// import "./App.css";
import Login from "../Login/Login";
// import Dashboard from '../Dashboard/Dashboard';
import Navigation from "../Navbar/Navbar";
import Preferences from "../Preferences/Preferences";
import Cats from "../Cats/Cats";
import CatBreedInfo from "../CatBreedInfo/CatBreedInfo";
import useToken from "./useToken";

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/cats">
            <Cats />
          </Route>
          <Route path="/catBreedInfo">
            <CatBreedInfo />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
