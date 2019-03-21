import React, { Component } from 'react';
import countries from '../data/countries.json';
import {Link} from 'react-router-dom';


class Country extends Component {

  componentDidMount(){
    
  }

  componentDidUpdate(){
  }

  getCountry = () => {
    const cca3= this.props.match.params.code;
    return countries.find(country => {
      return country.cca3 === cca3;
    });
  }

  

  renderBorderCountries = (country) => {
    return country.borders.map((border, index)=>{
      const borderName = countries.find(country => country.cca3 === border)
      return <li key={index}><Link  to={border}>{borderName.name.common}</Link></li>
    })
  }

  renderCapital(country){
    return country.capital;                               
  }

  renderArea(country){
    return country.area;                               
  }
    

  render() {
    const country = this.getCountry()
    return (
    <div>
      { country.name &&  
        <h1>{country.name.common}</h1>
      }
      <h2>CAPITAL</h2>
      <p>{this.renderCapital(country)}</p>
      <h2>Area</h2>
      <p>{`${this.renderArea(country)} Km2`}</p>
      <h2>BORDERS</h2>
      <ul>
        {this.renderBorderCountries(country)}

      </ul>
      <div>
        <Link to= {`/`}>Back</Link>
        
      </div>
    </div>
    );
  }
}

export default Country;