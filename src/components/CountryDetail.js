import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countriesDetail from '../data/countries.json';


class CountryDetail extends Component {
    
    render(){
        console.log(this.props.match.params);
        const getCountry = (id) => {
            const theProject = oneProject => {
              return oneProject.cca3 === id;
            }
            return countriesDetail.find(theProject)
          };
          
          const { params } = this.props.match;
          const foundCountry = getCountry(params.id);
        
        return (
            <div className="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td className = "td-witdh ">Capital</td>
                    <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{foundCountry.area} km
                    <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                    <ul>
                        {foundCountry.borders.map((item, index) =>{
                            const country = getCountry(item);
                            return <li key = {index}><Link to={`/home/${item}`}>{country.name.common}</Link></li>
                        })}
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>
                </div>
        )
    }

}

export default CountryDetail;