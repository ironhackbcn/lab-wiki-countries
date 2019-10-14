import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountryList from './components/CountryList';
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
        <div className="container">
          <div className="row">
            <div className="country-list">
              <CountryList />
            </div>
            <div className="country-deatils">
              <Route path="/:id" component={CountryDetail}></Route>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
