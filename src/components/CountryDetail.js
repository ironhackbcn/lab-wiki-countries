import React, { Component } from 'react'
import countries from '../data/countries.json';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class CountryDetail extends Component {

  state = {
    countries: countries,
  }

  render() {

    const { countries } = this.state;
    const { id } = this.props.match.params;
    const theChosenOne = countries.filter((country) => country.cca3 === id);
    const theChosenOneBorders = theChosenOne[0].borders;

    const borders = countries.filter((country) => {
      return theChosenOneBorders.indexOf(country.cca3) !== -1;
    })

    const listCountries = () => {
      return borders.map((country, index) => {
        return <li><Link to={`/${country.cca3}`}>{country.name.official}</Link></li>
      })
    }

    return (
      <div>
        <h1>{theChosenOne[0].name.official}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{theChosenOne[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{theChosenOne[0].area} Km<sup>2</sup></td>
            </tr>
            {(theChosenOne[0].borders.length !== 0 ) ?
            <tr>
              <td>Borders</td>
              <ul>
                {listCountries()}
              </ul>
            </tr> 
            : null }
          </tbody>
        </table>
      </div>
    )
  }
}
