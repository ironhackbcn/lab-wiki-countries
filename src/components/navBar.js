import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
            <Link className="navbar-brand" to="/home">WikiCountries</Link>
            </div>
            </nav>
        )
    }
}

export default NavBar; 