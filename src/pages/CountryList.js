import React, { Component } from 'react'
import data from '../data/countries.json'
import { Redirect, Link} from 'react-router-dom'



class CountryList extends Component {
  state = {
    countries: data,
  }
  render() {
    const {countries} = this.state
    return (
      <div>
      {countries.map((countries, index) => {
        return (
       <Link to={`/country-detail/${countries.cca3}`}> 
       <div key={index}>
        <li> <h2>{countries.flag}</h2></li>
        <li> <h2>{countries.name.official}</h2> </li>
        </div> </Link>
      )
      })}
      </div>
    )
  }
}

export default CountryList;