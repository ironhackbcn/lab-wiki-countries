import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from "react-router-dom";

class Detail extends Component { 
  render() {
    const country = countries.filter((country => {
      return country.cca3 === this.props.match.params.cca3
    }))[0]        
     
    return(
      <div className="col-7">
            <h1>{country.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      {
                        country.borders.length > 0 ? country.borders.map((border,index) => {            
                          return <li key={`id-${index}`}><Link to={`/${border}`}>{border}</Link></li>
                        }) : <p>This country is an island :)</p> 
                      }     
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
  }
}

export default Detail;