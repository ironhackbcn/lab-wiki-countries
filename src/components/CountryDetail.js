import React, { Component } from 'react';
import countries from './../data/countries.json'
import { Link } from 'react-router-dom';
// import queryString from 'query-string';



class CountryDetail extends Component {


  // helper function - retrieves the project by id
  getCountryById = (id) => {
    let result = countries.find((eachCountry) => eachCountry.cca3 === id);
    return result;
  };

  render() {
    console.log(this.props);

    // Deconstruct the query params from props.match
    const { params } = this.props.match;
    const foundCountry = this.getCountryById(params.id);


    return (

      <div className="col-7">
        <h1>{foundCountry.name.official}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: 30 }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{foundCountry.area} km
                    <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {
                    foundCountry.borders.map((border) => {
                      return (
                        <li>

                          <Link to={`/${border}`} >{border}</Link>
                        </li>
                      )
                    })
                  }

                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default CountryDetail;