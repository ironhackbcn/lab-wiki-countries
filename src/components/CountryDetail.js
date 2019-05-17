import React from 'react';
import data from '../data/countries.json'

function CountryDetail(props) {

  // helper function - retrieves the project by id
  const getCountryById = (id) => {
    let result = data.find( (country) => country.cca3=== id );
    return result;
  };
 console.log(props)
   // Deconstruct the query params from props.match
   const { params } = props.match;
   const foundCountry = getCountryById(params.id);

  return(
     <div>
            <h1>{foundCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                  { 
                    !foundCountry.borders[0]===""? 
                    foundCountry.borders.map((border, index) => {
                      return(
                      <div key={index}>
                      <li>{border}</li>
                      </div>)
                      })
                     :
                     <p>No borders</p> 
                     
                    
                  }
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )  
}
export default CountryDetail;