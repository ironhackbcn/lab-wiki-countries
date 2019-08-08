import React from 'react'
import countries from '../data/countries.json'

function CountryList() {
  return (
    <div className='list-group'>
        {countries.map((country, index) => {
          return (
            <a key={index} className='list-group-item list-group-item-action' href={`/details/${country.cca3}`}>{country.name.common}</a>
          )
        })}
    </div>
  )
}


export default CountryList