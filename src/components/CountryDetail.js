import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';

class CountryDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const country = countries.filter(country => {
      return country.cca3 === id;
    });

    const borders = country[0].borders.map((border, id) => {
      return (
        <li key={id}>
          <Link to={border}>
            {
              countries.filter(filteredCountry => {
                return filteredCountry.cca3 === border;
              })[0].name.common
            }
          </Link>
        </li>
      );
    });

    return (
      <div>
        <h1>{country[0].name.common}</h1>
        <p>Capital {country[0].capital[0]}</p>
        <p>
          Area {country[0].area} km<sup>2</sup>
        </p>
        <p>Borders</p>
        <ul>{borders}</ul>
      </div>
    );
  }
}

export default CountryDetail;
