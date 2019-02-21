import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import countries from '../data/countries'

export default class List extends Component {
  render() {
    return (
      <div>
        <h1>Country List</h1>

        <ul>
          {countries.map((country) => <li> <Link to={'/'+country.cca3}>{country.flag + " " + country.name.common}</Link></li> )}
        </ul>


      </div>
    )
  }
}
