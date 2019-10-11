import React, { Component } from 'react';
import countries from './data/countries.json';
import CountryDetail from './CountryDetail';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <ul className="nav justify-content-center">
          <li className="nav-item">Wiki Countries</li>
        </ul>
        <div className="row">
          <div className="col-5">
            <Route>
              <div className="list-group">
                {countries.map((eachCountry) => {
                  return (
                    <div className="list-group-item list-group-item-action" key={eachCountry.cca3}>
                      <Link to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
                    </div>
                  )
                })}
              </div>
            </Route>
          </div>
          <Route path="/:id" component={CountryDetail} />
        </div>
      </div>
    );
  }
}

export default App;