import React, { Component } from 'react';
import data from '../data/countries.json'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    state = {
        countries:data, 

    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.state.countries.map((element) => {
                    return (
                        <li>
                            <Link className="list-group-item list-group-item-action" to={'/country/' + element.cca3}> {element.flag}-{element.name.common} </Link>
                        </li>
                    )
                    } )}
                </ul>
            </div>
        )
    }
}
