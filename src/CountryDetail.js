import React, { Component } from 'react'
import { NavLink} from 'react-router-dom';
import countries from './data/countries.json';

const getCountryById = (cca3) => {
  let result = countries.find( (eachCountry) => eachCountry.cca3 === cca3 );
  return result;
};

class CountryDetail extends Component {
  constructor(props) {
    super(props);
    const { params } = props.match;
    const country = getCountryById(params.id);
    this.state = {
      country: country
    }
  }
  render() {
    return (
      <div className="col-7">
        <h1>{this.state.country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{this.state.country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.state.country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li><NavLink to="/AND">Andorra</NavLink></li>
                  <li><NavLink to="/BEL">Belgium</NavLink></li>
                  <li><NavLink to="/DEU">Germany</NavLink></li>
                  <li><NavLink to="/ITA">Italy</NavLink></li>
                  <li><NavLink to="/LUX">Luxembourg</NavLink></li>
                  <li><NavLink to="/MCO">Monaco</NavLink></li>
                  <li><NavLink to="/ESP">Spain</NavLink></li>
                  <li><NavLink to="/CHE">Switzerland</NavLink></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}


export default CountryDetail;