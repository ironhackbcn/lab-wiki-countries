import React, { Component } from 'react';
import countries from '../data/countries.json';
import './Home.css'


class Home extends Component {
  state = {
    countries: countries
  }

  render() {
    const { countries } = this.state;
    return (
      <div class="col-5">
        <div className="list-group">
          {
            countries.map((country) => {
              return <a href={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</a>
            })
          }
        </div>
      </div>
    )
  }
}

export default Home
