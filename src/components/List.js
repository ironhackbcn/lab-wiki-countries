import React, { Component } from 'react';
import countries from '../data/countries.json';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';

const listStyle = {
  width: '30%',
  margin: '20px'
}

class List extends Component {

  renderList() {
    return countries.map((e, index) => {
      return <Link to={`/${e.cca3}`} key={index} className="list-group-item list-group-item-action"> {e.flag} {e.name.common}</Link>
    })
  }
  render() {
    return (
      <div class="list-group" style={listStyle}>
        {this.renderList()}
      </div>
    );
  }
}

export default List;