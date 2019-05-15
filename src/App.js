import React, { Component } from 'react';
import './App.css';
import CountryDetail from './components/CountryDetail';
import countries from './data/countries.json'
import { Route, Switch, NavLink } from 'react-router-dom';


let styleTag = {
  maxHeight: '90vh',
  overflow: 'scroll'
}



class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div class="container">
          <div className="row">

            <div className="col-5" style={styleTag}>
              <div className="list-group">

                {
                  countries.map((country) => {
                    return (
                      <NavLink to={`/${country.cca3}`} className="list-group-item list-group-item-action">
                        <span role="img" aria-label="flag">{country.flag}</span>
                        {country.name.official}
                      </NavLink>
                    )
                  })
                }
              </div>
            </div>
            <Switch>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
