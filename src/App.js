import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';
// import countries from './data/countries.json'

class App extends Component {
  // state = {
  //   countries: countries,
  // }

  render() {
    return (
      <Router>
        {/* <Switch> */}
        <div>
          <div>
            <h1>WikiCountries</h1>
          </div>
          <div className="row">

          <Route path="/" component={Home}/>
          <Route path="/:id" component={CountryDetail}/>
          </div>
        </div>
        {/* </Switch> */}
      </Router>
    );
  }
}

export default App;
