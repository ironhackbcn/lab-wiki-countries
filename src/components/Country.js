import React, { Component } from 'react';
import countries from '../data/countries.json';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Country extends Component {
  render() {
    const country = countries.filter(country => country.name.official === this.props.match.params.countryname)[0];

    return (
      <div className="list-group">
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <ul>
          {country.borders.map((e, index) => {
            const borderName = countries.filter(element => element.cca3 === e)[0];
            return <li><Link key={`${e}${index}`} to={`/countries/${borderName.name.official}`}> {borderName.name.official}</Link></li>
          })}
        </ul>
      </div >
    );
  }
}

export default withRouter(Country);