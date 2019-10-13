import React, { Component } from "react";
import countries from "../data/countries.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

const CountryDetail = props => {
  const findedCountry = countryID => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === countryID;
    };
    return countries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = findedCountry(params.id);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
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
                {foundCountry.borders.map((cca3, index) => {
                  const country = findedCountry(cca3).name.common;
                  return (
                    <li key={`${cca3}-${index}`}>
                      <NavLink to={`/${cca3}`} activeStyle={{ color: "green" }}>
                        {country}
                      </NavLink>
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

export default CountryDetail;
