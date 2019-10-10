import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';

const Country = props => {
  // console.log('THIS PROPS: ', this.props);

  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    };
    return countries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id);

  return (
    <div>
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border, index) => {
                  const country = getCountry(border);

                  return (
                    <li key={`c-${index}`}>
                      <Link to={`/${border}`}>{country.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Country;
