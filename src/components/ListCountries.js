import React, { Component } from "react";
import Data from "../data/countries.json";
import { Link, Switch, Route } from "react-router-dom";
import Countrie from "./Countrie";

class ListCountries extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {Data.map((country, index) => {
                return (
                  <Link
                    className="list-group-item list-group-item-action"
                    to={country.cca3}
                  >
                    <span>{country.name.official}</span>
                    <span>{country.flag}</span>
                  </Link>
                );
              })}
            </div>
          </div>
          <Switch>
            <Route path="/:id" component={Countrie} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default ListCountries;
