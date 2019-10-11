import React, { Component } from 'react';
import './App.css';
import countries from './data/countries.json';
import { Route, Link } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

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
          <Route path="/:id" component={CountryDetail} />
        </div>
      </div>
    );
  }
}

export default App;
