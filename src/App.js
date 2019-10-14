import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              WikiCountries
            </NavLink>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5 App-List">
              <div className="list-group">
                <Route path="/">
                  <CountryList />
                </Route>
              </div>
            </div>
            <div class="col-7">
              <Route path="/:id" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
