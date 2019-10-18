import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetail from './components/CountryDetail';
import NavBar from './components/NavBar';
import countries from './data/countries.json'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>WikiCountries</h1>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path='/countries' component={Countries} />
          <Route exact path='/countries/:id' component={CountryDetail} />
        </Switch>

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12" style={{ maxHeight: 90 + "vh", overflow: "scroll" }}>
                <div className="list-group">
                  {
                    countries.map((oneCountry, index) => {
                      return (
                        <div key={`${oneCountry.ccn3}-${index}`}>
                          <h3>
                            <Link className="list-group-item list-group-item-action" to={`/countries/${oneCountry.ccn3}`}>
                              {oneCountry.flag} {oneCountry.name.common}
                            </Link>
                          </h3>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
