import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countriesDetail from '../data/countries.json';


class Content extends Component {
    render(){
        return (        
          <div className="scroll-columns col-5">
            <div className="list-group">
            {countriesDetail.map((country, index) =>{
              return (
                <div key={country.cca3}>
                <Link className="list-group-item list-group-item-action" to={`/home/${country.cca3}`}>{country.flag}{country.name.common}</Link>
                </div>
              )
            })}
            </div>
          </div>
        )
    }

}

export default Content;