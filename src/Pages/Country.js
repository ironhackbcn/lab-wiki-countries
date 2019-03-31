import React from 'react';
import countries from './../data/countries.json';
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";

function Country({ countryId }) {
    const country = countries.find(country => country.cca3 === countryId);

    return (
        <div>
            <table class="table">
                <tbody>
                    
                    <tr>
                        <td>
                        <h1>{country.name.official}</h1>
                        </td>    
                    </tr>
                    <tr> 
                        <td>Capital</td>    
                        <td>{country.capital}</td>
                    </tr>
                    <tr>     
                        <td>Area</td>
                        <td>{country.area} km</td>
                    </tr>
                    <tr>     
                        <td>Borders</td>
                        {country.borders.map((border, position) => {
                        const country = countries.find((country) => country.cca3 === border)
                        return <tr>
                            <td key={position}>
                            <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
                            </td>
                        </tr>
                        })}
                    </tr>
                </tbody>
            </table>    
        </div>
    )
}    

export default Country;