import React, { Component } from 'react'
import countries from '../data/countries.json'


class CountryDetail extends Component {
  state = {
    countries: countries
  }

  getCountryName = (cca3) => {
   let name;
   countries.forEach(country => {
     if(country.cca3 === cca3) {
       name = country.name.common;
     }
   });
   return name
  }

  render() {
    const cca3 = this.props.match.params;
    return (
      <div class="col-7">
        {
          countries.map((country) => {
            if(cca3.id === country.cca3) {
              return (
                <div>
                  <h2>{country.name.common}</h2>
                  <hr/>
                  <h4>Capital {country.capital}</h4>
                  <hr/>
                  <h4>Area {country.area} km<sup>2</sup></h4>
                  <hr/>
                  <div>
                    <div><h4>Borders</h4></div>
                    <div>
                      <ul>
                      {
                        country.borders.map((border)=>{
                          return <li><a href={`/${border}`}>{this.getCountryName(border)}</a></li>
                        })
                      }
                      </ul>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default CountryDetail
