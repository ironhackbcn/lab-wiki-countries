import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/Home" type="button" className="btn btn-info">Home</Link>
        
      </div>
    );
  }
}

export default NavBar;