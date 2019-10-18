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
        <div>
            <h2>{foundCountry.name.common}</h2>
            <p>
                Capital: {foundCountry.capital} <br/>
                Area: {foundCountry.area} <br/>
                Borders: {foundCountry.borders[0]} <br/>
            </p>
            <Link to='/countries'>Back</Link>
        </div>
    )
}

export default countriesDetails;

