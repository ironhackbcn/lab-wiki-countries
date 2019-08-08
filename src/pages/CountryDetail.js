import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom'
import data from '../data/countries.json'

class CountryDetail extends Component {
  state = {
    country : {},
    countries: data,
    loading: true,
  }

  componentDidMount(){
    
    const country = this.state.countries.find((pais)=>{
      return pais.cca3 === this.props.match.params.id
    }) 
    this.setState({country, loading: false,})
  }

  render() {
    console.log(this.state.country)
    return (
      <div>
        <Link to = '/'> <button> Back </button> </Link>
        <h1>Country Details Page</h1>
        <h2>{!this.state.loading && this.state.country.name.official}</h2>
        <p> Capital: {!this.state.loading && this.state.country.capital}</p>
        <p> Area: {!this.state.loading && this.state.country.area}</p>
        <ul> Borders:
        <li>{!this.state.loading && this.state.country.borders}</li>
        </ul>
        
      </div>
    )
  }
}

export default CountryDetail;