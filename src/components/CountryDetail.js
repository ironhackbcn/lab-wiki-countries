import React from 'react';
import countries from '../data/countries.json'

const countryDetail = (props) => {
  console.log(props.match.params)
  const id = props.match.params;


  const getCountry = (id) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    }
    return countries.find(theCountry)
  };
  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);
  console.log(foundCountry)
  return (
    <div>
      <h1>{foundCountry.name.official}</h1>
      <h3>{foundCountry.capital}</h3>
      <p>{foundCountry.area}</p>
      <ul>
        {foundCountry.borders.map((country) =>{
          return <li key={country.id}>{country}</li>
        })}
      </ul>
    </div>
  )
}

export default countryDetail;