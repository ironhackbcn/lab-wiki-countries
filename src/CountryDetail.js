import React from 'react';
import countries from './data/countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {

  const getCountry = (id) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    }
    return countries.find(theCountry)
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);

  return (
    <div className="col-7">
      <h2>{foundCountry.name.common}</h2>
      <h5>Capital: {foundCountry.capital[0]}</h5>
      <h5>Area: {foundCountry.area} km2</h5>
      <h5>Borders:</h5>
      <ul>
        {foundCountry.borders.map((country, index) => {
          const borderCountry = getCountry(country, 10);
          return (
            <li key={index} ><Link to={`/${country}`}>{borderCountry.name.common}</Link></li>
          )
        })
        }
      </ul>
    </div >
  );
};

export default CountryDetail;