import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import countries from './../data/countries.json';


class Countries extends Component {

    state = {
        countries: countries,
      }

    render() {
        return (
            <div>
                <table class="table is-hoverable">
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        
                        {this.state.countries.map( (country, index) => {
                            return <tr key={index}>
                                    <td>{country.flag}</td>
                                    <td>{country.name.official}</td>
                                </tr>
                            })} 
                    </tbody>
                </table>

            </div>
        )
    }    
}

export default Countries;