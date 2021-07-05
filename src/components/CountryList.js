import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";

const CountryList = () => {
  return (
    <div className="country-list">
      <ul>
        {countries.map((country, id) => {
          return (
            <li
              className="list-group-item list-group-item-action"
              key={`${country.cca3}-${id}`}
            >
              <Link to={`/${country.cca3}`}>
                {country.flag}
                {country.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryList;
