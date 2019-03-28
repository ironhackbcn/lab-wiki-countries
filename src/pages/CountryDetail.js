import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import countries from '../data/countries.json';

export default class CountryDetail extends Component {
  
  findCountry = (query) => {
    const found = countries.filter((country) => {
      return country.cca3.indexOf(query) > -1;
    })
    
    return found;
  }
  
  render() {
    console.log(this.props.location.found);
    return (
      <div className="col-7">
        <h1>{this.props.location.found[0].name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{this.props.location.found[0].capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.props.location.found[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.location.found[0].borders.map((element, index) => {
                    const border = this.findCountry(element);
                    return <li><Link to={"/"+element}> 
                              {border[0].name.common}
                            </Link></li>
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
