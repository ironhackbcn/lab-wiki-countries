/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import "./App.css";
import CountryDetails from "./components/CountryDetail";
import { Route, NavLink } from "react-router-dom";
import countries from "./data/countries";

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
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: 90 + "vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {countries.map((eachCountry, index) => {
                  return (
                    <NavLink
                      key={`${eachCountry.name.common}-${index}`}
                      to={`/${eachCountry.cca3}`}
                      activeClassName="active"
                      className="list-group-item list-group-item-action"
                    >
                      {eachCountry.flag} &nbsp;
                      {eachCountry.name.common}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <Route exact path="/:id" component={CountryDetails}></Route>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
