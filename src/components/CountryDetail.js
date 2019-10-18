import React, { Component } from 'react';
import countries from '../data/countries';
import { Link } from 'react-router-dom';

const countriesDetails = (props) => {
    console.log(props);

    const getCountry = id => {
        const theProject = oneProject => {
            return oneProject.ccn3 === id;
        }
        return countries.find(theProject)
    };

    const { params } = props.match;
    const foundCountry = getCountry(params.id);

    return (
        <div className='col-7'>
            <h1>{foundCountry.name.common}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: 30 + "%" }}>Capital</td>
                        <td>{foundCountry.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{foundCountry.area} km2
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            {/* {foundCountry.borders[0]} */} 
                            <ul>
                                {foundCountry.borders.map((oneBorder, index) => {
                                    return (
                                        <li style={{textAlign:'justify'}} key={`${index}`}>
                                            <Link to={`/${oneBorder.ccn3}`}>{oneBorder}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Link to='/countries'>Back</Link>
        </div>
    )
}

export default countriesDetails;

