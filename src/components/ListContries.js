import React, { Component } from "react";
import countries from "../data/countries.json";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";

class ListContries extends Component {
  render() {
    return (
      <div className="col-5">
        <div className="list-group overflow-auto maxheight">
          {countries.map(country => {
            return (
              <NavLink
                key={country.ccn3}
                className="list-group-item list-group-item-action"
                to={"/" + country.cca3}
              >
                <div>
                  <div>{country.flag}</div>
                  <div>{country.name.common}</div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListContries;
