import React, {Component} from 'react';
import countries from '../data/countries.json';
import {Link} from 'react-router-dom';



class Details extends Component {
  state = {
    country: ''
  }

  componentDidMount() {
    this.findCountry()
  }
  
  findCountry = () => {
    const newCountry = countries.filter((country, index) => {
      if(country.cca3 === this.props.match.params.id){
        return country;
      }
    })
    this.setState({
      country: newCountry[0]
    })
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.findCountry();
    }
  }

  
  render(){
    const {country} = this.state;

    return (
      <section>
      { country ? (
          <div>
            <h1>{country.name.common}</h1>
            <h3>Capital: {country.capital[0]}</h3>
            <h3>Area: {country.area}Km2</h3>
            <h3>Borders</h3>
            <ul>
                {country.borders.map((country, index)=> {
                  return(
                    <li key={index}>
                      <Link to={`/details/${country}`}>{country}</Link>
                    </li>
                  )
                })

                }
            </ul>
          </div>
         ) : <p>loading...</p> 
      }
      </section>
    )
  }

  
  
  
}

export default Details;
