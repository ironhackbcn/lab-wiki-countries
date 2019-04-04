import React, { Component } from 'react';
import CountryItem from './CountryItem';

class CountryList extends Component {
  render() {
    const {countries} = this.props;
    return (
      <div className="col-5">
      <h1>Countries</h1>
        <div className='list-group'>
          {countries.map((country, index) => (
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