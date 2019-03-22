import React, { Component } from 'react';
import Country from '../components/Country';
import countries from '../data/countries.json'

class Home extends Component {
  getCca3 = (cca3) =>{
    
     this.props.getCca3(cca3);
  }
  render() {
        
         return countries.map((country, index) => {
        return <Country key={`id-${index}`} country={country} getCca3={this.getCca3}/>
     })
  }
}

export default Home;

  