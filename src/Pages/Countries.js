import React from 'react';
import 'bulma/css/bulma.css';
import countries from './../data/countries.json';
import Country from './Country.js'
import { Link } from "react-router-dom";

function Countries({ match }) {
    const countryId = match.params.countryId;
    return (
        <div div className="App-countries">
            <div className="scroll">
                <table className="table">
                    <tbody>
                        {countries.map( (country, index) => {
                        return <tr key={index}>
                                    <td  className={(country.cca3 === countryId) ? "selected" : ""}>
                                    <Link to={`/country/${country.cca3}`} className={(country.cca3 === countryId) ? "selectedColor" : "unselectedColor"}>
                                        {country.flag}
                                        &nbsp; &nbsp;
                                        {country.name.official}
                                    </Link>    
                                    </td>
                                </tr>
                        })} 
                    </tbody>
                </table>
            </div>
            <div className="App-content">
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
