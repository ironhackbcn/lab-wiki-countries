import React, { Component } from 'react';
import CountryItem from './CountryItem';
import countries from '../data/countries.json';

class CountryList extends Component {
  state = {
    countries
  }

  render = () => {
    return (this.state.countries.map((item, index) => {
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

export default CountryList;



