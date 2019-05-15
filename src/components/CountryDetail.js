import React, { Component } from 'react';
import data from '../data/countries.json';
import { Link } from 'react-router-dom';


// helper function - retrieves the project by id
const getCountryById = (cca3) => {
  let result = data.find( (eachCountry) => eachCountry.cca3 === cca3 );
  return result;
};

class CountryList extends Component {
  constructor(props){
    super(props)
    this.state = {
      foundCountry: getCountryById(this.props.match.params.cca3) 
    }
  }

  renderBorders = () => {
    return this.state.foundCountry.borders.map((item, index) => {
      return (
        <li>{item[index]}</li>
      );
    });
  }


  render(){
    return (
      <div className="col-6 text-left mr-3">
        <h2>{this.state.foundCountry.name.official}</h2>
        <table className="table">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{this.state.foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.state.foundCountry.area} m<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.renderBorders()}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CountryList



