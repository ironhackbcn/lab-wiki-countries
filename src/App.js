import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import { CountriesList } from './components/CountryDetail';
import Country from './components/Country';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/countries' component={CountriesList}></Route>
        <Route path='/countries/:countryname' component={Country}></Route>
        <Link to='/countries'>List</Link>
      </div>
    );
  }
}

export default App;
