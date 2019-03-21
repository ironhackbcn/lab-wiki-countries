import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CountryItem extends Component {
  
  render() {
    const { cca3, flag, name, index } = this.props;
    return (
        <Link key={`${name}-${index}`} to={`/country/${cca3}`}>
          <li><span>{flag}</span>{name}</li>
        </Link>
    );
  }
}

export default CountryItem;

