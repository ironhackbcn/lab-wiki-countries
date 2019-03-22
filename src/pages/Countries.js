import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Countries extends Component {
  render() {

    return (
      <div>
        <div className="list-group">
          <Link to={`/country/${this.props.country.cca3}`} className="list-group-item list-group-item-action">{this.props.country.flag} {this.props.country.name.common}</Link>
        </div>
      </div>
    );
  }
}

export default Countries;