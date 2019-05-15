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

  renderCountry = () => {
    
    const getCountryById2 = (cca3) => {
      let result = data.find( (eachCountry) => eachCountry.cca3 === cca3 );
      return result;
    };

    const foundCountry2 =  getCountryById(this.props.match.params.cca3) 

    const renderBorders = () => {

      let cca3ArrBorders = [];
      let nameOfficialBorders = [];

      foundCountry2.borders.map((item, index) => {
        cca3ArrBorders.push(item);
      });

      cca3ArrBorders.map((item, index) => {
        nameOfficialBorders.push(getCountryById2(item));
      });

      if (cca3ArrBorders.length > 0){
        return nameOfficialBorders.map((item, index) => {
          return (
            <li><Link to={ `/${item.cca3}` }>{ item.name.official }</Link></li>
          );
      });
      }

    }

    return (
      <div>
        <h2>{foundCountry2.name.official}</h2>

         <table className="table">
          <tbody>
            <tr>
              <td className="tableLabel">Capital</td>
              <td>{foundCountry2.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry2.area} m<sup>2</sup></td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {renderBorders()}
                </ul>
              </td>
            </tr>
            </tbody>
        </table>
        </div>
    )
  }




  render(){
    return (
      
      <div className="col-6 text-left mr-3">

            {this.renderCountry()}

      </div>
    )
  }
}

export default CountryList



