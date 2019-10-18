import React from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';

let allCountries = countries;

allCountries = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5" style={{ maxHeight: 90 + "vh", overflow: "scroll" }}>
                    <div className="list-group">
                        {
                            countries.map((oneCountry, index) => {
                                return (

                                    <div key={`${oneCountry.ccn3}-${index}`}>
                                        <h3>
                                            <Link className="list-group-item list-group-item-action" to={`/countries/${oneCountry.ccn3}`}>
                                            {oneCountry.flag} {oneCountry.name.common}
                                            </Link>
                                        </h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default allCountries;