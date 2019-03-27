import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

class Countris extends Component {
  render() {
    console.log(this.props)
    return (
      <ul>
          {countries.map((country, index) => {
            return (
              <li  key={index} className='country-list'>
                <img src={country.flag} alt=""/>
                <Link to={`/countries/${country.cca3}`}>{country.name.official}</Link>
              </li>
            )
          })}
        </ul>
    );
  }
}

export default Countris;


