
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';


class List extends Component {
  state={
    countriesArray: countries
  }

  linkStyles={
    display: "flex",
    backgroundColor: "white",
    borderColor: "grey",
    color:  "black",
  }

  list = {
    height:"100vh",
    overflow: "scroll",
  }

  render() {
    return (

          <div style={this.list} class="col-5">
            <div class="list-group">
          {
            this.state.countriesArray.map((country, index) => {
              return(
               
                  <Link style={this.linkStyles} key={index} to={`/details/${country.cca3}`} className="list-group-item list-group-item-action active"> <p>{country.flag}</p> {country.name.common} </Link>
               
              )
            })
          }
          </div>
        
        
      </div>
    )
  }
}


export default List;