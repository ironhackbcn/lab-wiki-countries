import React, { Component } from 'react';

// Data
import countries from '../data/countries.json'

class CountriesList extends Component {

  renderList = () => {
    return (
      countries.map((country, index) => {
        return (
          <a href="" className="list-group-item list-group-item-action">{country.flag} {country.name.common}</a>
        )
      })
    )
  }

  render() {
    return (
      <div className="list-group">{this.renderList()}</div>
    )
  }
}

export default CountriesList