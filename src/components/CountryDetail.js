import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';

const detailStyle = {
  margin: '50px',
  textAlign: 'left',
  width: '40%'
}

const boldStyle = {
  fontWeight: 'bold'
}

const lineStyle = {
  display: 'flex',
  justifyContent: 'space-between'
}

class CountryDetail extends Component {

  findCountry() {
    let country;
    countries.forEach(e => {
      if (e.cca3 === this.props.match.params.cca3) {
        country = e;
      }
    });

    return country;
  }

  renderBorders(country) {
    if (country.borders.length === 0) {
      return <p>No borders</p>
    } else {
      return country.borders.map(e => {
        let borderName;
        countries.forEach(c => {
          if (c.cca3 === e) {
            borderName = c.name.common;
          }
        });
        return (<li>
          <Link to={`/${e}`}>{borderName}</Link>
        </li>);
      });
    }
  }
  render() {
    const country = this.findCountry();
    return (
      <div style={detailStyle}>
        <h1 style={boldStyle}>{country.name.common}</h1>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={lineStyle}><p style={boldStyle}>Capital:</p> {country.capital}</li>
          <li class="list-group-item" style={lineStyle}><p style={boldStyle}>Area:</p> {country.area} km2</li>
          <li class="list-group-item"><p style={boldStyle}>Borders:</p>
            <ul>
              {this.renderBorders(country)}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default CountryDetail;