import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className='container'>
            <Link className='navbar-brand' to='/' style={{ textDecoration: 'none' }}>Home</Link>
            <Link className='navbar-brand' to='/countries' style={{ textDecoration: 'none' }}>Countries</Link>
        </div>
    </nav>
  )
}

export default navbar;