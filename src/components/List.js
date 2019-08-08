import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import data from '../data/countries.json'



class List extends Component {
  render() {
    return (
       <>
        <div className="row">
          <div className="col-5">Column 5/12</div>
          <div className="col-7">Column 7/12</div>
        </div>

        <div className="list-group">
          {data.map((country, index) => <NavLink to={country.cca3} key={index} className="list-group-item list-group-item-action">{country.flag} {country.name.official}</NavLink>
          )}
        </div>     
      </>      
    )
  }
}

export default List;
