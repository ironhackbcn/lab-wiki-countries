import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom'

export class CountriesList extends Component {
  render() {
    return (
      <div className="list-group">
        {countries.map((country, index) => {
          console.log(country)
          return <Link key={`${country}${index}`} to={`/countries/${country.name.official}`} className='list-group-item list-group-item-action'>{country.flag}{country.name.official}</Link>
        })}
      </div>
    );
  }
}