import React, { Component } from 'react';
import CountryDetail from '../components/CountryDetail';

class Country extends Component {
  render() {
    const {cca3} = this.props.match.params;
    return (
      <CountryDetail cca3={cca3}/>
    );
  }
}

export default Country;