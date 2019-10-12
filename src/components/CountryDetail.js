import React from 'react';
import './CountryDetail.css';
import { Link } from "react-router-dom";

import countries from '../data/countries.json';

const CountryDetail = props => {  
    
  const getCountry = id => {
    const theCountry = oneCountry => {
      return oneCountry.cca3 === id;
    }
     return countries.find(theCountry)
  };
  
  const { params } = props.match;
  const foundCountry = getCountry(params.id);
   
        return (
            <div className="col-7">
              <h1>{ foundCountry.name.common }</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{ foundCountry.capital }</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{ foundCountry.area } km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                          {foundCountry.borders.map((cca3, index) => {
                              const country = getCountry(cca3).name.common;
                            return (
                            <li><Link to={`/${cca3}`} key={`${cca3}-${index}`}>{country}</Link></li>
                            )
                            })
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
