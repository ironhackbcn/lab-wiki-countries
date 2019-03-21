import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';

class Country extends Component {

  render() {
    const [country] = countries.filter(country => {
      return country.cca3 === this.props.match.params.cca3
    })
    return (
      <div>
        <div className="col-7">
          <h1>{country.name.common || ""}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td >Capital</td>
                <td>{country.capital || ""}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.area || ""} km
                    <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((border, index) => {
                      const [myCountry] = countries.filter(country => {
                        return country.cca3 === border;
                      })
                      return <li key={`id-${index}`}><Link to={`/country/${border}`}>{myCountry.name.common}</Link></li>
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Country;