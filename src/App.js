import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import countries from './data/countries.json';
import { Switch, Route, Link } from 'react-router-dom';
import CountryDetail from './components/Country';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                {countries.map((country, index) => {
                  return (
                    <Link
                      key={index}
                      className="list-group-item list-group-item-action"
                      to={`/${country.cca3}`}
                    >
                      <span>{country.flag}</span> {country.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="col-7">
              <Route exact path="/:id" component={CountryDetail}></Route>
              {/* <h1>France</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{ width: '30%' }}>Capital</td>
                    <td>Paris</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      551695 km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        <li>
                          <a href="/AND">Andorra</a>
                        </li>
                        <li>
                          <a href="/BEL">Belgium</a>
                        </li>
                        <li>
                          <a href="/DEU">Germany</a>
                        </li>
                        <li>
                          <a href="/ITA">Italy</a>
                        </li>
                        <li>
                          <a href="/LUX">Luxembourg</a>
                        </li>
                        <li>
                          <a href="/MCO">Monaco</a>
                        </li>
                        <li>
                          <a href="/ESP">Spain</a>
                        </li>
                        <li>
                          <a href="/CHE">Switzerland</a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </div>
        <Switch></Switch>
      </div>
    );
  }
}

export default App;
