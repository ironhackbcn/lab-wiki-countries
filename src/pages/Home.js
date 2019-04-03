import React, { Component } from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import countries from '../data/countries.json';


class Home extends Component {

   state = {
    countries: [...countries],
  }

  countryList = () => {
    return countries.map((country,index) => {
      return <a 
        key={index} 
        index={index}
        className='App'
        href={`/${country.cca3}`}
        >{country.flag} {country.name.common}</a>
    })
  }

  render() {
    return (
        <div className="container">
            <div style={{maxHeight: '90vh', overflow: 'scroll'}}>
              <div className="list-group">
                {this.countryList()}
              </div>
            </div>
        </div>
    );
  }
}

export default Home;