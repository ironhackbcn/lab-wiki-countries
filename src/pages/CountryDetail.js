import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// Data
import countries from '../data/countries.json'

class CountryDetail extends Component {

  getCountryName = (bordersCountry) => {
    const fullName = countries.filter(country => {
      return country.cca3 === bordersCountry
    })
    return fullName[0].name.common
  }

  renderBorders = (country) => {
    return country.borders.map((bordersCountry, index) => {
      return (
        <li key={`id-${index}`}>
          <Link to={`/country/${bordersCountry}`}>{this.getCountryName(bordersCountry)}</Link>
        </li>
      )
    })
  }

  render() {
    const { cca3 } = this.props.match.params

    const matchCountry = countries.filter((country) => {
      return country.cca3 === cca3
    })

    return (
      <section>
        <h1>{matchCountry[0].name.common}</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{matchCountry[0].capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{`${matchCountry[0].area} km 2`}</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.renderBorders(matchCountry[0])}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export default CountryDetail