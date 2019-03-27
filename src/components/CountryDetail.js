import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

class countryDetail extends Component {

  constructor(props){
    super(props);
    const countryObject = props.match;
    console.log()





    this.state = { 
      countryCode: ''
    }
}
  render() {
   return(
     <div>
       <h3>Hola</h3>
     </div>
   )
  } 
}

export default countryDetail;