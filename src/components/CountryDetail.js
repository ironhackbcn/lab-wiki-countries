import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";



const CountryDetail = props => {

  const handleDatacountry = () => {
    return country[0].borders.map((borderWith, index) => {
      return (
        <li key={`${borderWith}-${index}`} >
          <Link to={`/${borderWith}`}>
            {countries.filter((everyCountry)=>{return everyCountry.cca3 === borderWith})[0].name.common}
          </Link>
        </li>
      );
    })}
    
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
      <p>{id}</p>
      <p>{country[0].name.common}</p>
      <p>{country[0].name.capital}</p>
      <p>
        {country[0].area}Km<sup>2</sup>
      </p>
      {country[0].borders.length > 0 && (
        <div>
          <p>Borders</p>
          <ul>{handleDatacountry()}</ul>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
