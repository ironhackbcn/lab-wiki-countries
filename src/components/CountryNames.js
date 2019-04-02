import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';



class CountryNames extends Component {

  state = {
    countries
  }

  render() {
    return (
      <div className="countries-list">
      <ul className="list-group">
        {this.state.countries.map((country, index) => {
          return <Link
            className="list-group-item list-group-item-action"
            key={`id-${index}`}
            to= {`/country/${country.cca3}`}>
              {country.flag}{country.name.common}
          </Link>
        })}
      </ul>
    </div>
  );
}
}

export default CountryNames