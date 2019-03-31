import React from 'react';
import 'bulma/css/bulma.css';
import countries from './../data/countries.json';
import Country from './Country.js'
import { Link } from "react-router-dom";

function Countries({ match }) {
    const countryId = match.params.countryId;
    return (
        <div div className="App-countries">
            <table className="table is-hoverable">
                <tbody>
                    {countries.map( (country, index) => {
                    return <tr key={index}>
                                <td>
                                <Link to={`/country/${country.cca3}`}>
                                    {country.flag}
                                    &nbsp; &nbsp;
                                    {country.name.official}
                                </Link>    
                                </td>
                            </tr>
                    })} 
                </tbody>
            </table>
           
            <div>
                {
                    countryId 
                        ? <Country countryId={countryId}/>
                        : ""
                }
            </div>
        </div>
    )
}

export default Countries;
