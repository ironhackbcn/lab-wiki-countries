import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import data from './data/countries.json';




class App extends Component {
  constructor(){
    super()
    this.state = {
      countries: data
    }
  }

  renderCountries = () => {
    return this.state.countries.map((item, index) => {
      return (
        <CountryList
          key={index.toString()}
          {...item}
        />
      );
    });
  }


  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-dark bg-primary mb-4">
            <h1 className="text-white">WikiCountries</h1>
          </nav>
          <div className="row ml-3">
            <div className="col-5">
              <div className="list-group text-left list-group">
                { this.renderCountries() }
              </div>
            </div>
            <Route path="/:cca3" component={ CountryDetail } />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
