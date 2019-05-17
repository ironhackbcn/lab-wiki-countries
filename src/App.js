import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import CountryDetail from './components/CountryDetail'; 
import Countries from './components/Countries'; 
import data from './data/countries.json'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/countryDetail/:id" component={CountryDetail}/>
        </Switch>
        <Countries countries={data}/>
      </div>
    );
  }
}

export default App;
