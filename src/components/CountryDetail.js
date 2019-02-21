import React, { Component } from 'react';
import countriesArray from '../data/countries.json';

class CountryDetail extends Component {
  state = {
    countries: countriesArray,

  }

  render() {
    const countrySelected = this.state.countries.find(country => country.cca3 === this.props.match.params.id);
    return (
      <div>
        <h1>{countrySelected.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td><strong>Capital</strong></td>
              <td>{countrySelected.capital}</td>
            </tr>
            <tr>
              <td><strong>Area</strong></td>
              <td>{countrySelected.area} km
                    <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td><strong>Borders</strong></td>
              <td>
                <ul>
                  {countrySelected.borders.map((border) => {
                    return <li><a href={border}>{border}</a></li>
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CountryDetail;