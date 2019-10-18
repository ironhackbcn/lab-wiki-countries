import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
        <li><Link to='/countries' style={{ textDecoration: 'none' }}>countries</Link></li>
      </ul>
    </nav>
  )
}

export default navbar;