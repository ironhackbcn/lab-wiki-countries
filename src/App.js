import React, { Component } from 'react';
import countries from './data/countries.json';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Countries from './Pages/Countries';
import Country from './Pages/Country';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    countries: countries,
  }
  render() {
    return (
      <Router>
        <div className="App">
          <h1 className="heading">WikiCountries</h1>
          <Route path="/" exact component={Countries} />
        </div>
      </Router>
    );
  }
}

export default App;
