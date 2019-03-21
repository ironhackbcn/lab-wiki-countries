import React, { Component } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import countries from '../data/countries.json';
import List from './List';

const listStyle = {
  width: '30%',
  margin: '20px'
}

class CountryDetail extends Component {

  findCountry() {
    let country;
    countries.forEach(e => {
      if (e.cca3 === this.props.match.params.cca3) {
        country = e;
      }
    });

    return country;
  }

  renderBorders(country) {
    if (country.borders.length === 0) {
      return <p>No borders</p>
    } else {
      return country.borders.map(e => {
        let borderName;
        countries.forEach(c => {
          if (c.cca3 === e) {
            borderName = c.name.common;
          }
        });
        return (<li>
          <Link to={`/${e}`}>{borderName}</Link>
        </li>);
      });
    }
  }
  render() {
    const country = this.findCountry();
    if (country === undefined) {
      return (
       <List/>
      );
    } else {
      return (
        <div>
          <List/>
          <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} km2</p>
            <p>Borders:</p>
            <ul>
              {this.renderBorders(country)}
            </ul>
          </div>
        </div>
      );
    }

  }
}

export default CountryDetail;