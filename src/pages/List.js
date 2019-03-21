import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

class List extends Component {

  state = {
    countries
  }

  render() {
    return (
      <div className="countries-list">
        <ul className="list-group">
          {this.state.countries.map((country, index) => {
            return <li className="list-group-item list-group-item-action" key={`id-${index}`}>
              <h2>{country.flag}</h2>
              <Link to= {`/country/${country.cca3}`}> {country.name.common}   </Link>
            </li>

          })}
        </ul>
      </div>
    );
  }
}

export default List;