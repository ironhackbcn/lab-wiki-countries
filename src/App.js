import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WikiCountries</h1>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/countries/:id' component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
