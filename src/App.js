import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import Country from './components/Country';
import countries from './data/countries.json';

class App extends Component {
  render() {
    return (
      <div>
        <div class='title'>
          <h2>WikiCountries</h2>
        </div>
        <div className='container countries-links flex-size'>
          <Route path='/:cca3' component={Country}></Route>
          <div className='links-scroll'>
            {countries.map((country, index) => {
              return <Link key={`${country}${index}`} to={`/${country.cca3}`} className='list-group-item list-group-item-action'>{country.flag}{country.name.official}</Link>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
