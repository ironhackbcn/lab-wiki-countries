import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './data/countries.json';
import { Switch, Route, Link } from 'react-router-dom';
import CountryDetail from './components/Country';

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
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                {countries.map((country, index) => {
                  return (
                    <Link
                      key={index}
                      className="list-group-item list-group-item-action"
                      to={`/${country.cca3}`}
                    >
                      <span>{country.flag}</span> {country.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-7">
              <Route exact path="/:id" component={CountryDetail}></Route>
            </div>
          </div>
        </div>
        <Switch></Switch>
      </div>
    );
  }
}

export default App;
