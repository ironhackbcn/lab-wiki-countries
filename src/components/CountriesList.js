import React, { Component } from 'react';


class CountriesList extends Component {
  render() {
    return (
      <div>
        <a className="list-group-item list-group-item-action" href={this.props.cca3}>{this.props.flag} {this.props.common}</a>
      </div>
    )
  }
}

export default CountriesList;