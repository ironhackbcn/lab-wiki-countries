import React, { Component } from 'react';
import countries from '../data/countries.json';
import CountryItem from './CountryItem';
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  
  findCountry = (cca3) => {
    return countries.find((country) => {
      return country.cca3 === cca3;
    });
  }

  listBorders = (borderCountries) => {
    const countries = borderCountries.borders;
    if (countries <= 0) {
      return <p>No border countries</p>
    } else {
      const neighbours = countries.map((cca3) => {
            return this.findCountry(cca3)
          });
      return (neighbours.map((item, index) => {
        return <CountryItem
                name={item.name.common}
                index={index}
                key={`id${index}`}
                cca3={item.cca3}
                flag={item.flag}
                />
      }));
    }
  }

  render() {
    const cca3 = this.props.cca3;
    const country = this.findCountry(cca3);
    const { name, capital, area} = country;
    return (
      <div class="col-7">
        <h1>{name.common}</h1>
          <h2>Capital</h2>
          <p>{capital}</p>
          <h2>Area</h2>
          <p>{area} km
            <sup>2</sup>
          </p>
          <h2>Borders</h2>
            <ul>
              {this.listBorders(country)}
            </ul>
          <Link to='/'>Back</Link>
      </div>
    );
  }
}

export default CountryDetail;
