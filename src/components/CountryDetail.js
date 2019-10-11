import React from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";

const CountryDetail = props => {
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
          <ul>
            {country[0].borders.map(borderWith => {
              return (
                <li>
                  <Link to={`/:${borderWith}`}>
                    {console.log(countries.filter((country) => {
                      country.cca3 === borderWith;
                    }))}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;

{
  /*// <ul>
          
  //     country[0].border.map((borderWith)=>{ 
  //     return (<li>borderWith</li>)/*<Link to={`/:${borderWith}`} />{countries.filter((country)=>{return country.cca3 === borderWith })[0].name.common}</li>)*/
  //   })
  // </ul>*/
}
