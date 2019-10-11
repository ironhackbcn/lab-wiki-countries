import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";

const CountryList = () => {
  
  return (
    <div>
      <h1>Country List</h1>
      <ul className="list-group">
        {countries.map((country, id) => {
          return (
            <li key={`${country.cca3}-${id}`}>
              <Link to={`/${country.cca3}`}>
                {country.flag}
                {country.demonym}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryList;
