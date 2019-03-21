import React, { Component } from 'react';
import { Link } from "react-router-dom";
import countries from '../data/countries.json';

class CountryDetail extends Component {

  findMatchingCountry = (id) => {
    return countries.find((country) => {
      return country.cca3 === id;
    });
  }

  listAllNeighbourCountries = () => {
    const { id } = this.props.match.params;
    const { borders } = this.findMatchingCountry(id);
    const neighbours = borders.map((countryCode) => {
      return this.findMatchingCountry(countryCode)
    });
    return neighbours.map((country, index) => {
      return (
      <Link key={`${country.name.common}-${index}`} to={`/${country.cca3}`}>
        <li>
          {country.name.common}
        </li>
      </Link>
      );
    });
  }
  
  render() {
    const { id } = this.props.match.params;
    const country = this.findMatchingCountry(id);
    const { name, capital, area } = country;
    
    return (
      <div>
        <h1>{name.common}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Capital</strong> {capital[0]}
          </li>
          <li className="list-group-item">
            <strong>Area</strong> {area} km2
          </li>
          <li className="list-group-item">
            <strong>Borders</strong>
            <ul>
              {this.listAllNeighbourCountries()}
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

export default CountryDetail;
