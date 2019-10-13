import React, { Component } from "react";
import "./App.css";
import countries from "./data/countries.json";
import CountryDetail from "./components/CountryDetail";
import ListContries from "./components/ListContries";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={ListContries} />
          <Route path="/:id" component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}
export default App;
