import React from "react"
import data from "../data/countries.json"
import { Link } from 'react-router-dom'

class Country extends React.Component {

    getBorders = () => {
        const { cca3 } = this.props.match.params;

        // get the country that matches cca3 from params
        const country = data.filter((country) => {
            return country.cca3 === cca3
        });

        // get country borders cca3's
        const borders = country[0].borders.map((border) => {
            return border;
        });

        // get country list that matches cca3
        const countryBorderList = data.filter((country) => {
            return borders.includes(country.cca3)

        });

        // return links of countries array
        return countryBorderList.map((country, index) => {
            return <li key={index}><Link to={`/${country.cca3}`}>{country.name.common}</Link></li>
        })
    }

    getCountryByCca3 = (cca3) => {
        return data.filter((country) => {
            return country.cca3 === cca3
        });
    }

    render() {

        const { cca3 } = this.props.match.params;
        const country = this.getCountryByCca3(cca3);

        console.log(country)
        return ([
            <h1 key="Title">{country[0].name.common}</h1>,
            <table key="Table" className="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country[0].capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country[0].area} km
                    <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {this.getBorders()}
                                {/* <li key="1"><a href="/AND">Andorra</a></li>
                                <li key="12"><a href="/BEL">Belgium</a></li>
                                <li key="13"><a href="/DEU">Germany</a></li>
                                <li key="14"><a href="/ITA">Italy</a></li>
                                <li key="15"><a href="/LUX">Luxembourg</a></li>
                                <li key="16"><a href="/MCO">Monaco</a></li>
                                <li key="17"><a href="/ESP">Spain</a></li>
                                <li key="18"><a href="/CHE">Switzerland</a></li> */}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        ]);
    }

}

export default Country;