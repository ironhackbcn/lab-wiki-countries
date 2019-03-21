import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import countries from '../data/countries'


export default class Detail extends Component {

  checkStatus = () => {

  }

  render() {


    let id;
    this.props.selected ? id = this.props.match.params.id : id = "";
    console.log("ID",id);


    const countryDisplay = countries.filter((country) => country.cca3 === id);



    return (
      <div className="row">

        {console.log("render list")}

        <div className="col-5">
          <div className="list-group">
            {countries.map((country) => <Link key={country.cca3} className="list-group-item list-group-item-action "  to={'/' + country.cca3} >{country.flag + " " + country.name.common}</Link>)}
          </div>
        </div>

        <div className="col-7">
          {this.props.selected && countryDisplay.map((country) => {
            return (
              <div key={country.cca3}>
                <h3>{country.name.common}</h3>
                <p> Capital {country.capital}</p>
                <p> Capital {country.area}</p>
                <h6> Borders</h6>
                <ul>
                  {country.borders.map((borderCountry) => {
                    return <li key={borderCountry}><Link to={'/' + borderCountry}>{countries.filter((country) => country.cca3 === borderCountry)[0].name.common}</Link></li>;
                  })
                  }
                </ul>
              </div>
            )
          })
          }
        </div> 
      </div>

    )
  }
}
