import React, { Component } from 'react';
import CountriesCard from '../components/CountriesCard';
import countries from '../data/countries.json';
import Details from '../components/Details';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Countries extends Component {
  
  renderCountries =() => {
    return countries.map((country, index) => {
      return <CountriesCard key={`id-${index}`} countries={country}/>
    })
  }
  render() {
    return(         
      <div className="App">  
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>      
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">              
                {this.renderCountries()}    
              </div>
            </div>
              <Route path={`/:cca3`} component={ Details } />
          </div>        
        </div> 
      </div>
    )
  }
}

export default Countries;