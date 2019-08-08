import React from 'react'
import countries from '../data/countries.json'
import {Redirect, Link } from "react-router-dom";

function Home() {
  console.log(countries);
    return (
        <div>
            
            <h1>This is home</h1>
            <ul>
            {countries.map((country, demonym) => {
              return (
                <li key={demonym}><Link to={`/${country.cca3}`}>{country.flag}{country.demonym}</Link></li>
              )  
            })}
            </ul>
            
        </div>
    )
}

export default Home;