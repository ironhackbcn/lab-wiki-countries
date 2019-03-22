import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CountriesList extends Component {
  render() {
    return(      
      <Link to={`/${this.props.countries.cca3}`} className="list-group-item list-group-item-action">{this.props.countries.name.official}</Link>       
    )
  }
}

export default CountriesList;