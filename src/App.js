import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryList from './components/CountryList';

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
            <div className="country-list">
              <CountryList />
            </div>
            <div className="country-deatils"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
