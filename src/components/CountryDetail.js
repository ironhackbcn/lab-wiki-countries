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
    console.log(theChosenOne);

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
        <p><strong>Capital</strong> {theChosenOne[0].capital}</p>
        <p><strong>Area</strong> {theChosenOne[0].area} km<sup>2</sup></p>
        {(theChosenOne[0].borders.length !== 0 ) ?
          <div>
            <p><strong>Borders</strong></p>
            <ul>
              {listCountries()}
            </ul>
          </div> 
          : null }
      </div>
    )
  }
}
