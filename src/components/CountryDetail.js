import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries";

const CountryDetails = props => {
  console.log(props);

  const getCountry = cca3 => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    };
    return countries.find(theCountry);
  };

  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: 30 + "%" }}>Capital</td>
            <td>{foundCountry.capital[0]}</td>
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
                {foundCountry.borders.length === 0 ? (
                  <li>This country has no borders</li>
                ) : (
                  foundCountry.borders.map((cca3, index) => {
                    return (
                      <li key={`${cca3}-${index}`}>
                        <Link to={`/${cca3}`}>
                          {getCountry(cca3, 10).name.common}
                        </Link>
                      </li>
                    );
                  })
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
