import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CountryDetail extends Component {
  render() {
    const {countries, match} = this.props;
    const id = match.url.slice(1,match.url.lenght)
    
    let filtered = countries.filter(data => data.cca3 === id);
    filtered = filtered[0];

    const borders = filtered.borders.map((border) => {
      return countries.find((country) => {
        return country.cca3 === border;
      })
    })

    return (
      <div className='col-7'>
        <h1>{filtered.name.common}</h1>
        <p>Capital: {filtered.capital}</p>
        <p>Area: {filtered.area}</p>
        <ul>
        {borders.map((border) => {
          return (
            <li key={border.cca3}>
              <Link  to={`/${border.cca3}`}>{border.name.common} </Link>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default CountryDetail;