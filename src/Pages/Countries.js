import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class Countries extends Component {

    render() {
        return (
            <div>
                <table class="table is-hoverable">
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>{this.props.flag}</td>
                            <td><span>{this.props.name}</span></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }    
}

export default Countries;