import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';

const Countries = () => {
  return (
    <div className="list-group overflow-auto maxheight">
      {countries.map((country) => {
        return (
          <Link
            key={country.ccn3}
            className="list-group-item list-group-item-action"
            to={'/' + country.cca3}
          >
            <div className="countryLink">
              <div>{country.flag}</div>
              <div className="countryName">{country.name.common}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
