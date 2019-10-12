import React, { Component } from "react";
import Data from "../data/countries.json";
import { Link } from "react-router-dom";

class Countrie extends Component {
  render() {
    const {
      match: { params },
    } = this.props;

    const country = cca3 => Data.filter(country => country.cca3 === cca3);

    return (
      <div className="col-7">
        <h1>{country(params.id)[0].name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country(params.id)[0].capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country(params.id)[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country(params.id)[0].borders.map((cca3, index) => {
                    console.log("TCL: Countrie -> render -> cca3");

                    return (
                      <li>
                        <Link to={cca3}> {country(cca3)[0].name.common}</Link>
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
