import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";

const handlerMapList = () => {
  return countries.map((country, id) => {
    return (
      <li key={`${country.cca3}-${id}`}>
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
    <div className="list-group-item list-group-item-action">
      <ul className="list-group">{handlerMapList()}</ul>
    </div>
  );
};

export default CountryList;
