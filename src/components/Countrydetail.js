import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Countrydetail extends Component {

  render() {
    const{name, flag, cca3}= this.props
   // Guardamos en una const las props que biene del App.js justamente del renderList()  
    return (
      <div>
        <Link to= {`/${cca3}`}>{flag}{name}</Link>
        
      </div>
    );
  }
}

export default Countrydetail;