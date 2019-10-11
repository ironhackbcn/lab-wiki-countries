import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";

const CountryDetail = props => {
  const handleDatacountry = () => {
    return country[0].borders.map((borderWith, index) => {
      return (
        <li key={`${borderWith}-${index}`}>
          <Link to={`/${borderWith}`}>
            {
              countries.filter(everyCountry => {
                return everyCountry.cca3 === borderWith;
              })[0].name.common
            }
          </Link>
        </li>
      );
    });
  };

  const {
    match: {
      params: { id }
    }
  } = props;

  const country = countries.filter(country => {
    return country.cca3 === id;
  });

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h3>{country[0].name.common}</h3>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-4">
          <p>Capital</p>
        </div>
        <div className="col-4">
          <div className="col-4"></div> <p>{country[0].capital[0]}</p>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-4">
          <p>Area</p>
        </div>

        <div className="col-4">
          <p>
            {country[0].area}Km<sup>2</sup>
          </p>
          <div className="col-4"></div>
        </div>
      </div>
      <hr></hr>
      {country[0].borders.length > 0 && (
        <div className="row">
          <div className="col-4">
            <p>Borders</p>
          </div>
          <div className="col-4">
            <ul className="countrydetails">{handleDatacountry()}</ul>
          </div>
          <div className="col-4"></div>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
