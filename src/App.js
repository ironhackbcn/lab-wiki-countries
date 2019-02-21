import React, { Component } from 'react';
import './App.css';
import countries from './data/countries.json';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CountryDetail from './components/CountryDetail';

class App extends Component {
  state = {
    countries,
  }

  listAllCountries = () => {
    const { countries } = this.state;
    return countries.map((country, index) => {
      return (
        <Link to={`/${country.cca3}`}>
          <li key={index} className="list-group-item list-group-item-action">
            <span>{country.flag}</span>
            {country.name.common}
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">
            Wiki countries
          </h1>
        </nav>
        
        <div className="container">
          <Router>
            <div className="row">
              <div className="col-5 sidebar">
                <ul className="list-group scroll">
                  {this.listAllCountries()}
                </ul>
              </div>
              <div className="col-7 main">
                <Route exact path="/:id" component={CountryDetail}/>    
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
