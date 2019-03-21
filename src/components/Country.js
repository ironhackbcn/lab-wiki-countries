import React, { Component } from 'react';
import countries from '../data/countries.json';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Country extends Component {
  render() {
    const country = countries.filter(country =>
      country.cca3 === this.props.match.params.cca3
    )[0];

    return (
      <div className="list-group flex-size">
        <h1>{country.name.official}</h1>
        <div className='container-row'>
          <p><b>Capital: </b></p>
          <p>{country.capital}</p>
        </div>
        <div className='container-row'>
          <p><b>Area: </b></p>
          <p>{country.area}</p>
        </div>
        <ul>
          {country.borders.map((e, index) => {
            const borderName = countries.filter(element => element.cca3 === e)[0];
            return <li><Link key={`${e}${index}`} to={`/${borderName.cca3}`}> {borderName.name.official}</Link></li>
          })}
        </ul>
      </div >
    );
  }
}

export default withRouter(Country);