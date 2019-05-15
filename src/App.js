import React, { Component } from 'react';
import './App.css';
import countriesArray from './data/countries.json';
import CountryDetail from './components/CountryDetail';
import CountriesList from './components/CountriesList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  
  state = {
    countries: countriesArray
  }


  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => {
            return (
              <div className="App">
                <nav className="navbar navbar-dark bg-primary mb-3">
                  <div className="container">
                    <a className="navbar-brand" href="/">WikiCountries</a>
                  </div>
                </nav>
                <div className="row">
                  <div className="col-5" >
                    <div className="list-group">
                      {this.state.countries.map((country, index) => {
                        return <CountriesList key={index} cca3={country.cca3} flag={country.flag} common={country.name.common} />
                      })}
                    </div>
                  </div>

                  <div className="col-7">
                    <h1>Nada</h1>
                  </div>

                </div>

              </div>
            )
          }} />
          <Route path="/:id" component={CountryDetail} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
