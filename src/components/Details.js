import React, {Component} from 'react'
import countries from '../data/countries.json'
import { loadavg } from 'os';

class Details extends Component {
    state={
        country: {},
        loading: true,
    }
    componentDidMount(){
        let findCountry = countries.find(country=>country.cca3===this.props.match.params.id)
        this.setState({
            country:findCountry,
            loading: false,
        })
    }
    render() {
        console.log(this.state);

        return (
            <div>
                {!this.state.loading && 
                    <ul className="list-country">
                     <li>{this.state.country.cca3}</li>  
                     <li>{this.state.country.capital}</li>
                     <li>{this.state.country.area}</li>
                     <li>{this.state.country.borders}</li>
                     </ul>
                }
            </div>
        )
    }
}

export default Details;