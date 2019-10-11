import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';

const Country = props => {
  const getCountry = id => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    };
    return countries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <h3>Capital: {foundCountry.capital[0]}</h3>
      <h3>
        Area: {foundCountry.area} km<sup>2</sup>
      </h3>
      <h3>Borders:</h3>
      <ul>
        {foundCountry.borders.map((border, index) => {
          const BorderCountry = getCountry(border);

          return (
            <li key={index}>
              <Link to={`/${border}`}>{BorderCountry.name.common}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Country;
