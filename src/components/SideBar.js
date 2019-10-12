import React from 'react';
import './SideBar.css';
import { Link } from "react-router-dom";

import countries from '../data/countries.json';

const SideBar = () => {
  
    return (
        <div className="col-5">
        <div className="list-group">
          {countries.map((country, index) => {

            return (
              <Link to={`/${country.cca3}`} key={`${country.name.common}-${index}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
            )
          })
          }          
        </div>
      </div>
    );
  
}

export default SideBar;