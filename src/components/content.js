import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../data/countries.json';


class Content extends Component {
    state = {
        countries: countries
      }
    
      render() {
        const { countries } = this.state;
        return (
          <div className="col-5">
            <ul className="list-group">
              { countries.map((country, index) => {
                return ( 
                  <Link className="list-group-item list-group-item-action"
                    key={index}
                    to= {`/country/${country.cca3}`}>
                      {country.flag}{country.name.common}
                  </Link>
                )
              })  
              }
            </ul>
          </div>
        );
      }
    }
    

export default Content;