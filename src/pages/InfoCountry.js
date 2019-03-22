import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom'

class InfoCountry extends Component {

  countryBorders = (border) => {
    if(border.length > 0){
      return border.map((element) => {
        return <li key={`id-${element}`}><Link to={`/country/${element}`}>{element}</Link></li>
      })
    }else {return <p>No borders here, only water</p>}
  };

  onClick = () => {
    this.props.history.goBack()
  }

  render() {
    const id = this.props.match.params.id
    const country = countries.filter((item) => item.cca3 === id)[0]
    
    return (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h5>Borders:</h5>
        {/* llamamos la función y le pasamos com parámetro las fronteras
        del país filtrado, que es un array en el objeto json */}
        {this.countryBorders(country.borders)}
        <button className="btn btn-info" onClick={this.onClick}>Back</button>
      </div>
    );
  }
}

export default InfoCountry;