import React, { Component } from 'react';
import countriesArray from '../data/countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {

  state = {
    countries: countriesArray,
  }


  render() {
    const countrySelected = this.state.countries.find(country => country.cca3 === this.props.match.params.cca3);
    return (
      <div >
        <h1>{countrySelected.flag}{countrySelected.name.common}</h1>
        <table class="table">
          {/* <thead>'</thead> */}
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countrySelected.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{countrySelected.area} km
              <sup>2</sup>
              </td>
            </tr>
            <td>Borders</td>
            <td>
              <ul>
                {countrySelected.borders.map((borderCountry, index) => {
                  const borderCountryName = this.state.countries.filter(country => country.cca3 === borderCountry)[0]
                  return <li key={index}><Link to={borderCountryName.cca3} className="link">{borderCountryName.name.common}</Link></li>
                })}
              </ul>
            </td>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
