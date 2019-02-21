import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import countries from '../data/countries'


export default class Detail extends Component {


  render() {

    const { id } = this.props.match.params;

    return (
      <div>
        {countries.filter((country) => country.cca3 === id).map((country) => {
          return (
            <div>
              <h1>{country.name.common}</h1>
              <h3> Capital {country.capital}</h3>
              <h3> Capital {country.area}</h3>
              <h3> Borders</h3>
              <ul>
                {country.borders.map((borderCountry) => {
                  return <li><Link to={'/'+borderCountry}>{countries.filter((country) => country.cca3 === borderCountry)[0].name.common}</Link></li>;
                })
                }
              </ul>
            </div>

          )
        })
        }

        <Link to={'/'}>List</Link>

      </div>
    )
  }
}
