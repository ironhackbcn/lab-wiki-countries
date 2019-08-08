import React from 'react';
import countries from '../data/countries.json';
import Borders from '../components/Borders.js'

 function CountryDetails(props) {
  const countryAbbr = props.match.params.country
  const country = countries.filter((country) => country.cca3 === countryAbbr)[0];
  return (
    <div>
      <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30px'}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <Borders country={country} />
                    </ul>
                  </td>
                </tr>
              </tbody>
      </table>
    </div>
  )
}

export default CountryDetails;