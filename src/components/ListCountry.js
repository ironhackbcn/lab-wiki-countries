import React, { Component } from 'react';
import countries from "../data/countries.json";
import { Link } from 'react-router-dom';

class ListCountry extends Component {

    render() {
        const { id } = this.props.match.params;

        const countryList = countries.find((country) =>{
            return  country.cca3 === id
        })
        console.log(countryList);
        return (
            <div>
                <p>{this.countryList[0].name.common}</p>
                <p>Capital: {this.countryList[0].capital}</p>
                <p>Area: {this.countryList[0].area} km2</p>
                <h2>Borders</h2>
                    {
                        this.countryList[0].borders.map((border, index) =>{
                            <li key={`border-${border}`}>
                                <Link to={`/${border}`}>{border}</Link>
                            </li>
                        })
                    }
            </div>
        );
    }
}

export default ListCountry;