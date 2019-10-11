import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";

const handlerMapList = () => {
  return countries.map((country, id) => {
    return (
      <li className="list-group-item"key={`${country.cca3}-${id}`}>
        <Link to={`/${country.cca3}`}>
          {country.flag}
          {country.demonym}
        </Link>
      </li>
    );
  });
};

const CountryList = () => {
  return (
    <div className="country-list">
      <ul className="list-group">{handlerMapList()}</ul>
    </div>
  );
};

export default CountryList;
