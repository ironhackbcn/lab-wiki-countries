import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';

class CountryList extends Component {
  render() {
    return (
      <div>
        <ul>
          {countries.map((country, index) => {
            return (
              <li key={index}>
                <Link to={country.cca3}>
                  {country.flag}
                  {country.name.common}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CountryList;
