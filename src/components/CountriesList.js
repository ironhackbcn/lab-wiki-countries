import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Data
import countries from '../data/countries.json'

class CountriesList extends Component {

  renderList = () => {
    return (
      countries.map((country, index) => {
        return (
          <Link 
            index={`id-${index}`}
            to={`/country`} 
            className="list-group-item list-group-item-action"
          >{country.flag} {country.name.common}</Link>
        )
      })
    )
  }

  render() {
    return (
      <div>
        <h1>WikiCountries</h1>
        <div className="list-group">{this.renderList()}</div>
      </div>
    )
  }
}

export default CountriesList