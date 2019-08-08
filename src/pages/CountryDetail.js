import React from 'react'
import countries from '../data/countries.json';
import {Link}  from 'react-router-dom'

function CountryDetail(props) {
  return (
    <div>
        {countries
        .filter(country => country.cca3 === props.match.params.id)
        .map((item) => {
            return (
            <>
            <h1>{item.name.common}</h1>
            <Link to={'/'}><span>Back</span></Link>
            <p>Capital: {item.capital}</p>
            <p>Area: {item.area} km2</p>
            <ul>
            <p>Borders:</p>
            {item.borders.map((border, i, item) => {
              return (<li key={i}> <Link to={`/detail/${border}`}> {countries.filter(country => border === country.cca3).map((item) => { return (<><span>{item.flag}</span> <span>{item.name.common}</span></>) })} </Link></li>)
            })}
            </ul>
            </>)
        })}    
    </div>
  )
}

export default  CountryDetail;
