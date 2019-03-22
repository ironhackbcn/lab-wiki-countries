import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom'
import data from "../data/countries.json"

class List extends React.Component {

    getCountries() {
        return data.map((country, index) => {
            return <Link key={`${index}`} to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.name.common}</Link>
        })
    }

    render() {
        return (
            <div className="list-group">
                {/* <a className="list-group-item list-group-item-action" href="/ABW">Aruba</a> */}
                {this.getCountries()}
            </div>
        )
    }
}

export default List;

