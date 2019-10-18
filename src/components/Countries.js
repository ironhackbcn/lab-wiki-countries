import React from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';

let allCountries = countries;

allCountries = () => {
    return(
        <div>
            <h2>All countries:</h2>
            {
                countries.map( (oneCountry, index) => {
                    return(
                        <div key={`${oneCountry.ccn3}-${index}`}>
                            <h3>
                                <Link to={`/countries/${oneCountry.ccn3}`}>{oneCountry.name.common} - {oneCountry.ccn3} </Link>
                            </h3>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default allCountries;