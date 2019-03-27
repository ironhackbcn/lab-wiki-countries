import React from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

const countryDetail = (props) => {
  console.log(props.match.params)
  console.log(props)


  const getCountry = (id) => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    }
    return countries.find(theCountry)
  };
  const { params } = props.match;
  const foundCountry = getCountry(params.id, 10);
  return (
    <div>
      <h1>{foundCountry.name.official}</h1>
      <h3>{foundCountry.capital}</h3>
      <p>{foundCountry.area}</p>
      <ul>
        {foundCountry.borders.map((country) =>{
          const getPais = (country)=>{
            const oneCountry = pais =>{
              return pais.cca3 === country;
            }
            return countries.find(oneCountry)
          }
          const borderCountry = getPais(country)

          return <li key={borderCountry.cca3}><Link to={`/countries/${borderCountry.cca3}`}>{borderCountry.name.official}</Link></li>
        })}
      </ul>
      <button><Link to={`/countries`}>Go to Home</Link></button>
      <button onClick={props.history.goBack}>Go Back</button>
    </div>
  )
}

export default countryDetail;