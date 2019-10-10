import React, { Component } from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries";

class CountryList extends Component {
  state = {
    countriesList: [...countries]
  };

  render() {
    const { countriesList } = this.state;
    return (
      <div>
        <h1>Country List</h1>
        <ul className="list-group">
          {countriesList.map((country, id) => {
            return (
              <li key={id}>
                <Link to={`/${country.cca3}`}>
                  {country.flag}
                  {country.demonym}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CountryList;
