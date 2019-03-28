import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Route, Link } from 'react-router-dom';
import CountryDetail from '../components/CountryDetail';


class Countris extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
      <ul>
          {countries.map((country) => {
            return (
              <li  key={country.cca3} className='country-list'>
                <img src={country.flag} alt=""/>
                <Link to={`/${country.cca3}`} country={country}>{country.name.official}</Link>
              </li>
            )
          })}
        </ul>
        <Route exact path="/:id" component={CountryDetail}/>
      </div>
    );
  }
}

export default Countris;




