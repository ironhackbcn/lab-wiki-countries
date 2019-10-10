import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries";

class CountryDetail extends Component{
    state = {
        aCountryfinded: [...countries.filter((country) => {return country.cca3===this.props.match.params.cca3})]
    }

    
        
    

  render() {
    const {aCountryfinded} = this.state;
    return (<div>
        {console.log(aCountryfinded[0].capital)}
        {console.log(aCountryfinded[0].name)}
        {console.log(aCountryfinded[0].Area)}
        {console.log(aCountryfinded[0].borders)}
    </div>)
  }
}

export default CountryDetail;
