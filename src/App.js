import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CountryDetail from './pages/CountryDetail';
import Home from './pages/Home';
import countries from './data/countries.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Home}/>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
