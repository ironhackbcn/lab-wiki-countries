import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';


const getCountryByCca3 = (cca3) => {
  let result = countries.find( (eachCountry) => eachCountry.cca3 === cca3 );
  return result;
}




class CountryDetail extends Component {
  
  render() {
    const cca3 = this.props.match.params.cc3a;
    const detailCountry = getCountryByCca3(cca3);

    return (
       <div class="col-7">
       <h1>{detailCountry.name.common}</h1>
         <table class="table">
         <thead></thead>
         <tbody>
         <tr>
          <td>Capital:</td>
          <td>{detailCountry.capital}</td>
        </tr>
        <tr>
          <td>Area:</td>
          <td>{detailCountry.area}</td>
        </tr>
        <tr>
          <td>Borders:</td>
          <td>
          {
            detailCountry.borders.map((eachBorder, index) => {
              const borderCountry = getCountryByCca3(eachBorder)
              return(
                <div>
                  <Link to={`/details/${borderCountry.cca3}`} key={index}>{borderCountry.name.common}</Link>
                </div>
              )
            })
          }
          </td>
        </tr>
                  </tbody>
          </table>
      </div>
    )
  }
}


export default CountryDetail;