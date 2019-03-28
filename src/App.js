import React, { Component } from 'react';
import Countries from './components/Countries'
import countries from './data/countries.json'
import { Route } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wiki Countries</h1>
        <div className='country-components'>
          < Countries />
          <Route path={`/:id`} component={CountryDetail}/>
        </div>
      </div>
    );
  }
}

export default App;
