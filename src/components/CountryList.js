import React, { Component } from 'react';
import countries from '../data/countries';
import CountryItem from './CountryItem';

class CountryList extends Component {
  state = {
    countryList: countries,
  }
  render() {
    return (
      <div className="col-5">
      <h1>Countries</h1>
        <div className='list-group'>
          {this.state.countryList.map((country, index) => (
            <CountryItem
              key={index}
              data={country}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CountryList;