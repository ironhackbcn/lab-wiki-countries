import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";
import "./CountryDetail.css";

const CountryDetail = props => {
  const getCountryCode = id => {
    const theCountryCode = oneCountry => {
      return oneCountry.cca3 === id;
    };
    return countries.find(theCountryCode);
  };

  const { params } = props.match;
  const foundCountryCode = getCountryCode(params.id);

  return (
    <div className="col-7">
      <h1>{foundCountryCode.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td className="CountryDetail-Width">Capital</td>
            <td>{foundCountryCode.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountryCode.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountryCode.borders.map((cca3, index) => {
                  const country = getCountryCode(cca3).name.common;
                  return (
                    <li key={`${cca3}-${index}`}>
                      <Link to={`/${cca3}`}>{country}</Link>
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
