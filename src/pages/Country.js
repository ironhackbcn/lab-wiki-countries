import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import countries from '../data/countries.json';

class Country extends Component {
  state = {
    country: {},
    isLoading: true,
  }

  componentDidMount() {
    const countryID = this.props.match.params.country
    const infoCountry = countries.find((country)=> country.cca3 === countryID)

    this.setState({
      country: infoCountry,
      isLoading: false,
    })
  }

  getBorders = (borders) => {
    return borders.map((idCountry, i)=>{
      const infoCountry = countries.find((country)=> country.cca3 === idCountry)
      return <li className='list-unstyled' key={i}><a href={`/${idCountry}`}>{infoCountry.name.common}</a></li>
    })
  }

  template = () => {
    const {country} = this.state;

    return (
      <div className="App">
        <h2>{country.flag} {country.name.common}</h2>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul className='list-group'>
                  { country.borders.length === 0 ? <span className='list-unstyled' style={{color: 'grey', fontStyle: 'italic'}}>No borders</span> : this.getBorders(country.borders)}
                  {/* {this.getCountryBorders(country.borders)} */}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  render() {  
    return (
      <div>
        { this.state.isLoading ? 'Loading madafaka...' : this.template() }
      </div>
    )
  }
}

export default Country;
