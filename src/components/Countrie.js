import React, { Component } from "react";
import Data from "../data/countries.json";
import { Link } from "react-router-dom";

class Countrie extends Component {
  render() {
    const {
      match: { params },
    } = this.props;
    const country = Data.filter(country => country.cca3 === params.id);
    console.log("TCL: Countrie -> render -> country", country);

    return (
      <div class="col-7">
        <h1>{country[0].name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country[0].capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country[0].borders.map((cca3, index) => {
                    return (
                      <li>
                        <Link to={cca3}> {cca3}</Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Countrie;
