import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries'



class CountryDetail extends Component {

  render() {
    const countryID = this.props.match.params;
    const [countryMatch] = countries.filter((country) => {
      return countryID.cca3 === country.cca3;
    })
    
    return (
      <div className="col-">
        <div className="list-group">
          <h2>{countryMatch.name.common}</h2>   
          <hr/>  
          <h4>Capital: {countryMatch.capital}</h4>
          <hr/>
          <h4>Area: {countryMatch.area} km<sup>2</sup></h4>   
          <ul>
            {countryMatch.borders.map((border, index) => {
              const [borderCountry] = countries.filter(country => {
                return country.cca3 === border;
              })
              return <li key={index}>
              <Link to={`/country/${border}`}>
                {borderCountry.name.common}
              </Link></li>
            })}
          </ul> 
        </div>
      </div>
    );
  }
}

export default CountryDetail;