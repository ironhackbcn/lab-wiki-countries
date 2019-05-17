import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Countries(props) {
  return(
  props.countries.map((country) => {
    return(
    <div key={country.cca3}>
      <a href={`/countryDetail/${country.cca3}`}>{country.flag} {country.name.common}</a>
    </div>
    )
  })
  )  
}


export default Countries;