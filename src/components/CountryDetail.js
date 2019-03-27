import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

class countryDetail extends Component {

  constructor(props){
    super(props);

    this.state = { 
      countryCode: ''
    }
}
  render() {
    console.log(this.props)
   return(
     <div>
       <h3>hola</h3>
     </div>
   )
  } 
}

export default countryDetail;