import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const { name, flag } = this.props.country
    console.log(this.props)
    return (
      <nav id='navbar'>
        <ul>
          <NavLink to="/" exact ClassName="selected-link text-left">{flag} {name.common}</NavLink>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
