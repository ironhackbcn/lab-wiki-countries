import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1>WikiCountries</h1>
        <ul>
          <li><Link to="/">List</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;