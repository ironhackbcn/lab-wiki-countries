import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render() {
    return (
      <div>
        {this.props.flag} <Link to={this.props.cca3}>{this.props.common}</Link>
      </div>
    )
  }
}

export default CountriesList;