import React, { Component } from 'react';
import countries from '../data/countries.json';
import CountryItem from './CountryItem';
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  
  findCountry = (cca3) => {
    return countries.find((country) => {
      return country.cca3 === cca3;
    });
  }

  listBorders = (borderCountries) => {
    const countries = borderCountries.borders;
    if (countries <= 0) {
      return <p>No border countries</p>
    } else {
      const neighbours = countries.map((cca3) => {
            return this.findCountry(cca3)
          });
      return (neighbours.map((item, index) => {
        return <CountryItem
                name={item.name.common}
                index={index}
                key={`id${index}`}
                cca3={item.cca3}
                flag={item.flag}
                />
      }));
    }
  }

  render() {
    const cca3 = this.props.cca3;
    const country = this.findCountry(cca3);
    const { name, capital, area} = country;
    const style = {
      width: "30%"
    }
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="back-link" to='/'>Back</Link>
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <h1>{name.common}</h1>
              <table className="table">
                <thead></thead>
                  <tbody>
                  <tr>
                    <td style={style}>Capital</td>
                    <td>{capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {this.listBorders(country)}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountryDetail;
