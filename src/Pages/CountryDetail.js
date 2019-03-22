import React, { Component } from 'react';
import countries from '../data/countries.json'
import {Link} from 'react-router-dom';


class CountryDetail extends Component {

  getCountry = (countryCCA) => {
    const country = countries.filter(function (item) {
      return item.cca3.toLowerCase().search(
        countryCCA.toLowerCase()) !== -1;
    });
    return country[0]
  }
  getBorders = (borders) => {
    return countries.map((country, index) => {
      return borders.map((element, index) => {
          if(element === country.cca3){
            return <li><Link to={`/country/${country.cca3}`}>{country.name.common}</Link></li>
          } 
        })
    }) 
  }
  
  render() {
    const id = this.props.match.params.cca3;
    const country = this.getCountry(id);
    return (
      <div>
        <p>{country.name.common}</p>
        <p>{country.capital}</p>
        <p>{country.area}</p>
        {this.getBorders(country.borders)}
      </div>
    );
  }
}

export default CountryDetail;