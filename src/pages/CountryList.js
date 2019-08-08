import React from 'react'
import countries from '../data/countries.json';
import {Link}  from 'react-router-dom'

const CountryList = () =>  {
  console.log(countries)
  return (
    <div>
      <ul>
      {countries.map((country, index) => {
       return <li key={index}><span>{country.flag}</span> <Link to={`/detail/${country.cca3}`}>{country.name.common}</Link></li>

      })}
      </ul>
      
    </div>
  )
}

export default  CountryList;
