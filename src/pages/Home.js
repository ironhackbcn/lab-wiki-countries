import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import countries from '../data/countries.json';
import CountryDetail from './CountryDetail';
import {Link} from 'react-router-dom';

export default class Home extends Component {

  findCountry = (query) => {
    const found = countries.filter((country) => {
      return country.cca3.indexOf(query) > -1;
    })

    return found;
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style= {{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              {countries.map((country, index) => {
                return <Link 
                          className="list-group-item list-group-item-action" 
                          to=
                          {{
                            pathname: "/"+country.cca3,
                            found: this.findCountry(country.cca3)
                          }}>
                          <span>{country.flag}</span> {country.name.common}
                        </Link>;
              })}
            </div>
          </div>
          <div className="col-7">
            <Route path="/:country" component={CountryDetail}/>
          </div>
        </div>
      </div>
    )
  }
}
