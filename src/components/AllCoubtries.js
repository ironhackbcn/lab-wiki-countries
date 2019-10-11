import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from "../data/countries.json";

class AllCoubtries extends Component {
    render() {
        return (
            <div className="selected-country">
                {
                    countries.map((country, index) =>{
                        return(
                            <Link
                            key={`country-${index}`}
                            to={`/${country.cca3}`}
                            >
                              <div className="flag-name">
                                <p>{country.flag}</p>
                                <p>{country.name.common}</p>
                              </div>
                            </Link>
  
                        );
                    })
                }
            </div>
        );
    }
}

export default AllCoubtries;