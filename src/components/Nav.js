import React,  { Component } from "react";
import { Link } from 'react-router-dom';
import "./nav.css";

class Nav extends Component {
    render(){
        return (<div>
            <nav className="navbar">
                <ul>
                    <li><div className="Menu-Bar"><Link to='/'>WikiCountries</Link></div></li>
                </ul>
            </nav>
        </div>)
    }
}

export default Nav;