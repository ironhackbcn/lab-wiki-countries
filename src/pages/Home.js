import React, { Component } from 'react';
import CountryList from '../components/CountryList';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>WikiCountries</h1>
        <CountryList/>
      </div>
    );
  }
}

export default Home;